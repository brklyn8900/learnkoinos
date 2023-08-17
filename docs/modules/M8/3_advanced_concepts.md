# Todo List Advanced Concepts

In this tutorial, we will look at some advanced topics of Koinos smart contract development, events, authorization, and testing. At the end of this tutorial our todo contract will properly require authorization which will be customized, will emit events to more easily track actions on our contract, and our contract will be properly unit tested.

This is part 4 of a 4 part series on how to develop smart contracts on the Koinos blockchain.

- Part 1 on setting up the dev environment can be found [here](https://learnkoinos.xyz/docs/modules/M4/1_introduction.html).
- Part 2 on building the smart contract can be found [here](https://learnkoinos.xyz/docs/modules/M8/1_todos.html).
- Part 3 on creating a front end to interact with the contract can be found [here](https://learnkoinos.xyz/docs/modules/M8/2_todos_front_end.html).

This tutorial will continue working with the todo smart contract written in part 2.

The code for this tutorial can be found [here](https://github.com/koinos/todos/tree/advanced-tutorial).

### Authorization

On Koinos, unlike on Ethereum, where contract addresses are separate from user addresses, contracts and users are the same primitive. In other words, contracts are users and users are contracts. This creates unique possibilities on the Koinos blockchain that are not possible on other blockchains. Contracts, by default, are upgradable using the key associated with the contract address. For many contracts, however, this is not a desirable feature. The immutability of a token contract is important to secure user assets.

The Koinos blockchain framework supports a programmable authorization system to allow contracts to define how they are authorized. This can simply cause a contract to be immutable, or define decentralized upgrade semantics. For an address that is intended solely for a user, this enables the creation of smart contract wallets where authorization mechanisms such as hierarchical multisig can be implemented.

Defining custom authorization is simple. All that needs to be done is implement a specific `authorize` function in your smart contract. Using the AS SDK, you can add the `authorize` function by adding `--generate_authorize` to the build commands in `package.json`

``` json
  "scripts": {
    "lint": "eslint --max-warnings 0 --ext ts \"*/assembly/**/*.ts\"",
    "build:debug": "koinos-sdk-as-cli build-all --generate_authorize debug 0 todos.proto",
    "build:release": "koinos-sdk-as-cli build-all --generate_authorize release 0 todos.proto",
    "test": "koinos-sdk-as-cli run-tests"
  }
```

The next time you build, the authorize function will be added to the generated `Todos.boilerplate.ts`.

``` ts
  authorize(args: authority.authorize_arguments): authority.authorize_result {
    // const call = args.call;
    // const type = args.type;

    // YOUR CODE HERE

    const res = new authority.authorize_result();
    res.value = true;

    return res;
  }
```

Copy the function into `Todos.ts`. We'll implement this in a second.

The other side of authorization is requiring authorization. It is important for contracts to be able to restrict access to the contract. It would be bad for Alice to be able to spend Bob's KOIN. Currently, our Todo contract has no restrictions on it whatsoever. Anyone can add an item to our Todo list. Let's fix that.

``` ts
  add_todo(args: todos.add_todo_arguments): todos.add_todo_result {
    // Require this contract's authority to add a todo
    System.requireAuthority(authority.authorization_type.contract_call, System.getContractId());

    ...
  }
```

This system call will call `authorize` on our current contract (returned by `System.getContractId()`) and check for `contract_call` authorization. Let's break this down a little.

When checking authority, a contract can either have `authorize` overridden or not. If it does not the Koinos system checks if the address signed the transaction at all. It may be the only signature on the transaction or one of many. But if the signature is there, the call is authorized. If the address has overridden `authorize`` with a smart contract the system will call in to that function. Whatever the return type is will be the result. That is completely left up to the contract. Likely it will be some form of cryptographic authorization, but it could be anything.

There are three types of authorization, `contract_call`, `transaction_application`, and `contract_upload`. The `call_contract` authorization is what user smart contracts use. This asks the contract if they authorize a call to the current contract. `transaction_application` asks the contract if they authorize the application of the transaction. This is used when an address is listed as the `payer` or `payee` of a transaction and is required to use the address' mana for transaction application. The last authorization type is `contract_upload`. This asks the contract if a new contract can be uploaded at this address. This can be used to make a contract immutable by always returning `false`, or implementing a permissioned upload strategy. You can interact with all three types of authorization when implementing `authorize`, but when requiring authority from a contract, you will only use the `contract_call` authorization type.

This call will check if the current contract has an `authorize` override. If it does not, then the system will check if the transaction is signed by the Todo contract address. If it is, the contract execution will continue. If it does not, then the execution will stop and the transaction will be reverted.

Now we can implement our `authorize` function.

```ts
  authorize(args: authority.authorize_arguments): authority.authorize_result {
    // TODO: Replace base58 decode with array literal
    const otherAddr = Base58.decode('1NRz4i4UhVJ5MMeNwDTwTY95ZygtpuPwPU');
    const contractId = System.getContractId();

    // Transaction signatures sign the transaction id, so we need it to check the signatures against
    const transactionId = System.getTransactionField('id')!.bytes_value!;
    const signatures = Protobuf.decode<value.list_type>(System.getTransactionField('signatures')!.message_value!.value!, value.list_type.decode);

    // For each signature, recover the public key associated with it.
    // Check the address of the public key and if it matches the contract address or the other address, we authorize
    for (let i = 0; i < signatures.values.length; i++) {
      const signature = signatures.values[i].bytes_value!;
      let recoveredKey = System.recoverPublicKey(signature, transactionId)!;
      const addr = Crypto.addressFromPublicKey(recoveredKey);
      if (Arrays.equal(addr, contractId) || Arrays.equal(addr, otherAddr)) {
        return new authority.authorize_result(true);
      }
    }

    // If none of the signatures matched the expected addresses, we fail to authorize
    return new authority.authorize_result(false);
  }
```

You can replace `1NRz4i4UhVJ5MMeNwDTwTY95ZygtpuPwPU` with another address you control if you want to test the authorization function yourself on the testnet.

There is quite of code, but it is not too bad. First, we declare the addresses that we are looking for. For this `authorize` implementation we are going to allow the contract address and a second address, `1NRz4i4UhVJ5MMeNwDTwTY95ZygtpuPwPU`. This would be considered a 1 of 2 multisig. We now have to do a bit of the cryptography ourselves. Thankfully, there are Koinos system calls to handle that for us. We get the transaction id and the transaction signatures using the `getTransactionField` system call. We know ahead of time what types will be returned (`bytes_value` and `list_type`), so we can go ahead and convert those to the correct types.

Then, we iterate through each signature. For each signature, we recover the public key from the signature, convert the public key into an address, and check if the address matches either of our expected addresses. If it does, we return true. If we do not find any of our expected addresses, we return false.

To actually override our `authorize` function, we need to upload the contract with the override option.

```
Koinos CLI v2.0.0
Type "list" for a list of commands, "help <command>" for help on a specific command.
🔐 > help upload
Upload a smart contract
Usage: upload <filename:file> [abi-filename:file] [override-authorize-call-contract:bool] [override-authorize-transaction-application:bool] [override-authorize-upload-contract:bool]
```

When uploading a contract, the last four options (ABI, and the three overrides) are optional. If you want to override `authorize`, we recommend explicitly setting each. For the purposes of this tutorial, all we will override is the contract call override.

The command we would use is:

```
🔓 > upload contract.wasm todos.abi true false false
```

Let's hold off on uploading the contract for now. We will do so at the end of the tutorial.

### Events

The next feature we want to add to our contract is an event. Events are a way for contracts to communicate back outside the blockchain. Events are defined as protobuf messages. Let's add an event for when a task is added to our todo list. In `todos.proto` lets add the following.

```protobuf
// @description Event when a todo is added to the list
message todo_added_event {
  string task = 1;
}
```

The event can be named whatever you want it to be. It does not have any special requirements like function argument and return types, but appending the name with `_event` makes the purpose of the message clear.

Submitting an event is as simple as calling the `event` system call. Add the following to the end of `add_todo`.

```ts
  add_todo(args: todos.add_todo_arguments): todos.add_todo_result {
    ...

    // Create a new event and submit it via the event system call
    let event = new todos.todo_added_event();
    event.task = args.task!;

    System.event('todos.todo_added_event', Protobuf.encode(event, todos.todo_added_event.encode), [System.getContractId()]);

    // create an empty result because we don't need to return anything
    return new todos.add_todo_result();
  }
```

We first create the event and fill out the information. In this case, we want the event to contain the same task as the argument. When we call `System.event`, we pass in three arguments. The first is the name of the event. This can be whatever you want, but is intended to be a machine-readable name. For this reason, we recommend you namespace the event within your contract. The second argument is the serialized protobuf message. The third argument is an array of addresses called the impacted addresses. This is a way for the event to communicate which addresses were affected by the event. For example, for a token transfer event, the `from` and `to` addresses are listed as impacted. For our event, we just list the current contract as the impacted address.

Events are returned on transaction and block receipts and are indexed in the account history microservice. This event is a simple example and a bit redundant because it is identical to the system call, but can be quite useful for communicating side effects of complex contract calls. We will find our event in the account history microservice later in this tutorial.

### Testing

The AS SDK also supports contract testing. When you created your contract some basic test files were created under `assembly\__tests__`. Your tests go under `Todos.spec.ts`. The tests are compiled as Assembly Script and run on your contract directly. To interact with the Koinos system the SDK makes use of a Javascript library called MockVM. MockVM simulates parts of the Koinos system for the purpose of unit testing. It allows complex behaviors of the Koinos system to be fudged for testing. The SDK provides an interface for interacting with MockVM by importing MockVM.

The test structure is straightforward.

``` ts
import { Arrays, authority, Base58, MockVM } from '@koinos/sdk-as';
import { Todos } from '../Todos';
import { todos } from '../proto/todos';

const CONTRACT_ID = Base58.decode('1DQzuCcTKacbs9GGScRTU1Hc8BsyARTPqe');

describe('todos', () => {
  beforeEach(() => {
    MockVM.reset();
    MockVM.setContractId(CONTRACT_ID);
  });

  it("should add todo items", () => {
    const c = new Todos();

    // MockVM mimics the Koinos system. It does not need transaction information to check authorization
    // Instead we set what we want the result of the next to authorizations to be
    let auth = new MockVM.MockAuthority(authority.authorization_type.contract_call, CONTRACT_ID, true);
    MockVM.setAuthorities([auth, auth]);

    // Check when list is empty
    let res = c.get_todos(new todos.get_todos_arguments());
    expect(res.value.length).toBe(0);

    // Add an item
    const args = new todos.add_todo_arguments('Test item 1');
    c.add_todo(args);

    res = c.get_todos(new todos.get_todos_arguments());
    expect(res.value.length).toBe(1);
    expect(res.value[0]).toBe('Test item 1');

    // Add a second item
    args.task = 'Test item 2';
    c.add_todo(args);

    res = c.get_todos(new todos.get_todos_arguments());
    expect(res.value.length).toBe(2);
    expect(res.value[0]).toBe('Test item 1');
    expect(res.value[1]).toBe('Test item 2');

    // Check events
    let events = MockVM.getEvents();
    expect(events.length).toBe(2);
    expect(events[0].name).toBe('todos.todo_added_event');
    expect(events[0].impacted.length).toBe(1);
    expect(Arrays.equal(events[0].impacted[0], CONTRACT_ID)).toBe(true);
    expect(events[1].impacted.length).toBe(1);
    expect(Arrays.equal(events[1].impacted[0], CONTRACT_ID)).toBe(true);
  });

  it("should not add todo item without authorization", () => {
    const c = new Todos();

    // Check the contract throws when adding a todo is not authorized
    // NOTE: We did not call MockVM.setAuthorities.
    // We could also have given it an authority that would return false
    expect(() => {
      // AS does not yet support lambda captures, so all variables must be defined within the lambda
      const c = new Todos();
      const args = new todos.add_todo_arguments('Test item 1');
      c.add_todo(args);
    }).toThrow();

    // Check there were no side effects of the call
    let res = c.get_todos(new todos.get_todos_arguments());
    expect(res.value.length).toBe(0);

    let events = MockVM.getEvents();
    expect(events.length).toBe(0);
  });

  it("should authorize", () => {
    // TODO: MockVM does not yet support required system calls to test authorize function
  });

  it("should not authorize", () => {
    // TODO: MockVM does not yet support required system calls to test authorize function
  });
});
```

There are a few things that should be pointed out that can be tricky. When setting authorities on MockVM, the authorities are consumed on `authorize` calls. Because our test calls `add_todo` twice and we want them both to succeed, we add the authority to MockVM twice.

The second trap is that Assembly Script does not yet support variable captures in lambda functions. So in our second test when we want to check that `add_todo` throws when not authorized, we have to redeclare the contract within the lambda. This shouldn't cause a problem because your contract class should not rely on any persistent in memory state (all persisence must be through the Koinos database layer).

Lastly, at the time of writing, MockVM did not yet support the Koinos cryptographic functions. Those test cases are listed there but are unimplemented.

The tests can be executed by running `yarn test`. You will see a summary of the test cases as well as a coverage report.

```
❯ yarn test
yarn run v1.22.19
$ koinos-sdk-as-cli run-tests
Running tests...
yarn asp --verbose --config as-pect.config.js
$ /home/michael/dev/todos/node_modules/.bin/asp --verbose --config as-pect.config.js
       ___   _____                       __
      /   | / ___/      ____  ___  _____/ /_
     / /| | \__ \______/ __ \/ _ \/ ___/ __/
    / ___ |___/ /_____/ /_/ /  __/ /__/ /_
   /_/  |_/____/     / .___/\___/\___/\__/
                    /_/

⚡AS-pect⚡ Test suite runner [6.2.4]

[Log] Loading asc compiler
Assemblyscript Folder:assemblyscript
[Log] Compiler loaded in 162.594ms.
[Log] Using configuration /home/michael/dev/todos/as-pect.config.js
[Log] Using VerboseReporter
[Log] Including files: assembly/__tests__/**/*.spec.ts
[Log] Running tests that match: (:?)
[Log] Running groups that match: (:?)
[Log] Effective command line args:
  [TestFile.ts] node_modules/@as-pect/assembly/assembly/index.ts --runtime incremental --debug --binaryFile output.wasm --explicitStart --use ASC_RTRACE=1 --exportTable --importMemory --transform /home/michael/dev/todos/node_modules/@as-covers/transform/lib/index.js,/home/michael/dev/todos/node_modules/@as-pect/core/lib/transform/index.js --lib node_modules/@as-covers/assembly/index.ts

[Describe]: todos

[Event] todos.todo_added_event / [ '1DQzuCcTKacbs9GGScRTU1Hc8BsyARTPqe' ] / CgtUZXN0IGl0ZW0gMQ==
[Event] todos.todo_added_event / [ '1DQzuCcTKacbs9GGScRTU1Hc8BsyARTPqe' ] / CgtUZXN0IGl0ZW0gMg==
 [Success]: ✔ should add todo items RTrace: +480
[Error] Error: authority is not set
[Contract Exit] account '1DQzuCcTKacbs9GGScRTU1Hc8BsyARTPqe' authorization failed
 [Success]: ✔ should not add todo item without authorization RTrace: +161
 [Success]: ✔ should authorize
 [Success]: ✔ should not authorize

    [File]: assembly/__tests__/Todos.spec.ts
  [Groups]: 2 pass, 2 total
  [Result]: ✔ PASS
[Snapshot]: 0 total, 0 added, 0 removed, 0 different
 [Summary]: 4 pass,  0 fail, 4 total
    [Time]: 44.189ms

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  [Result]: ✔ PASS
   [Files]: 1 total
  [Groups]: 2 count, 2 pass
   [Tests]: 4 pass, 0 fail, 4 total
    [Time]: 4342.112ms
┌───────────────────┬───────┬───────┬───────┬──────┬──────────────────────────────────┐
│ File              │ Total │ Block │ Func  │ Expr │ Uncovered                        │
├───────────────────┼───────┼───────┼───────┼──────┼──────────────────────────────────┤
│ assembly/Todos.ts │ 44.4% │ 40%   │ 66.7% │ 0%   │ 51:78, 62:56, 66:45, 66:76, 51:3 │
├───────────────────┼───────┼───────┼───────┼──────┼──────────────────────────────────┤
│ total             │ 44.4% │ 40%   │ 66.7% │ 0%   │                                  │
└───────────────────┴───────┴───────┴───────┴──────┴──────────────────────────────────┘

Done in 4.56s.
```

### Deployment

Let's put this all together. We now have a smart contract that authorizes itself and emits events. Let's deploy it and test it out.

```
🔓 > upload contract.wasm todos.abi true false false
Contract uploaded with address 1MsphTEBkYPxdBYHexD1Xj1QiwCe3Qr17H
Transaction with ID 0x1220209060668195c7cd3778f77aca976d38eed186a21b1cebccf0140a1caf1f330d containing 1 operations submitted.
Mana cost: 1.56339119 (Disk: 30763, Network: 32434, Compute: 387331)

🔓 > register todos 1MsphTEBkYPxdBYHexD1Xj1QiwCe3Qr17H
Contract 'todos' at address 1MsphTEBkYPxdBYHexD1Xj1QiwCe3Qr17H registered
```

Once the contract has been uploaded we can register it in the CLI to interact with the contract.

```
 > todos.get_todos


🔓 > todos.add_todo "Finish todos workshop 4"
Calling todos.add_todo with arguments 'task: "Finish todos workshop 4"
'
Transaction with ID 0x122013d808dcdacae86bca9d8a0683a4c5ae463f542f41a1129951f6f8c7820ffba0 containing 1 operations submitted.
Mana cost: 0.0350406 (Disk: 54, Network: 278, Compute: 771777)

🔓 > todos.get_todos
value: "Finish todos workshop 4"
```

We can call the contract and add a todo item and get the item back. Create a new wallet to test the authorization (Don't forget to transfer a couple KOIN to the new address to pay the mana for the transaction).

```
🔓 > register_token tkoin 1FaSvLjQJsCJKq5ybmGsMMQs8RQYyVv8ju
Token 'tkoin' at address 1FaSvLjQJsCJKq5ybmGsMMQs8RQYyVv8ju registered

🔓 > tkoin.transfer 1PMnH7WQwFtrBZyKzdDRegzEnNbVehDeKd 1
Transferring 1 tKOIN to 1PMnH7WQwFtrBZyKzdDRegzEnNbVehDeKd
Transaction with ID 0x1220276195dc6ea3cc87f7b3b9cd77de7a522a2b25dc7e84ee14ecfbe1808f40197b containing 1 operations submitted.
Mana cost: 0.03858435 (Disk: 77, Network: 312, Compute: 829837)
```

*__Note:__ Replace the transfer address with your address.*

```
🔓 > open test.wallet test
Opened wallet: test.wallet

🔓 > address
Wallet address: 1PMnH7WQwFtrBZyKzdDRegzEnNbVehDeKd

🔓 > todos.add_todo "Test add todo from a different address"
cannot make call, account '1MsphTEBkYPxdBYHexD1Xj1QiwCe3Qr17H' authorization failed
```

Now open the wallet whose address was hardcoded into the contract. In this tutorial, that was `1NRz4i4UhVJ5MMeNwDTwTY95ZygtpuPwPU`.

```
🔓 > open user.wallet user
Opened wallet: user.wallet

🔓 > address
Wallet address: 1NRz4i4UhVJ5MMeNwDTwTY95ZygtpuPwPU

🔓 > todos.add_todo "Test add todo from a different address"
Calling todos.add_todo with arguments 'task: "Test add todo from a different address"
'
Transaction with ID 0x122013a96c9f0fbed4fc8728e322a471a4a93acdcef4686b7c4693424ac49e7ebd0c containing 1 operations submitted.
Mana cost: 0.0364933 (Disk: 75, Network: 293, Compute: 782851)
```

We just sent the transaction from a different address and the contract defined its own authorization!

Let's check the events in the API and verify they were generated correctly.

``` bash
> curl -d '{"jsonrpc":"2.0", "method":"account_history.get_account_history", "params":{"address":"1MsphTEBkYPxdBYHexD1Xj1QiwCe3Qr17H", "limit":3, "ascending":false}, "id":0}' https://harbinger-api.koinos.io | jq
```

A lot of information is going to be returned. If you look in the transaction receipt, you will see events.

``` json
"events": [
  {
    "sequence": 2,
    "source": "1MsphTEBkYPxdBYHexD1Xj1QiwCe3Qr17H",
    "name": "todos.todo_added_event",
    "data": "CiZUZXN0IGFkZCB0b2RvIGZyb20gYSBkaWZmZXJlbnQgYWRkcmVzcw==",
    "impacted": [
      "1MsphTEBkYPxdBYHexD1Xj1QiwCe3Qr17H"
    ]
  }
],
```

On https://protobuf-decoder.netlify.app/ you can input the base64 `data` field and it will decode it as a protobuf message with a single string field whose value is, "Test add todo from a different address" which is precisely what we expected to get back!

### Conclusion

In this tutorial we secured our smart contract by requiring an authority check, we overrode our own authority to allow two addresses to add todo items, emitted an event on successfully adding an event, tested our smart contract, and tested the behavior of our additions on the Harbinger testnet.

We welcome you to join the Koinos Discord and engage with our active developer community! https://discord.koinos.io

