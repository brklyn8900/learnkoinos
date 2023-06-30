# Understanding the SDK Folder Structure

Lets explore the folder structure of our `myawesomecontract` project. It will be structured as follows:

![file structure image](/images/vscode-file-structure-image.png "File structure")

## The `abi` directory:
ABI stands for Application Binary Interface. The `.abi` file is automatically generated for you when building the contract however you do not need to upload it for your smart contract to work. Without the ABI file, it won't be possible for others to easily interact with your smart contract.

## The  `assembly` directory:
The vast majority of the development work will be focused in the `assembly` directory.

![assembly folder image](/images/assembly-folder-image.png "Assembly directory")

- `__tests__` develop your unit tests in this directory.
- `proto` develop your protobuf defintions in this directory.
- `index.ts` contains the logical entry point of the contract. It is generated for your automatically when building your contract.
- `Myawesomecontract.boilerplate.ts` contains the auto-generated boilerplate based on your proto file defintions.  This file should be copied and the phrase `.boilerplate` should be removed. The new file is where you will develop your production level code. Each time you build your contract, this file will be replaced so never code directly on this boiler plate file.
- `Myawesomecontract.ts` is created by the user (see above).
- `tsconfig.json` tells the IDE what types are available in AssemblyScript, AS is like TypeScript but with WebAssembly types, it is automatically generated.


Let us now dig deeper into each of the two folders, `__tests__` and `proto`.


## The `/assembly/__tests__` directory:

In `__tests__` we should have a file called `myawesomecontract.spec.ts` containing unit tests for the smart contract. Unit tests are created by the developer.

Let's have a look at the actual unit test implementation for our `Hello World` contract. Comments have been added to the code that hasn't been explained previously:

``` ts
// Import the smart contract ts file
import { Myawesomecontract } from '../Myawesomecontract';

// Import the proto ts file
import { myawesomecontract } from '../proto/myawesomecontract';

// Define a test suite
describe('contract', () => {

  // Define a unit test
  it("should return 'hello, NAME!'", () => {
    // Create a new instance of the contract class
    const c = new Myawesomecontract();

    // Instantiate the arguments of the "hello" function
    const args = new myawesomecontract.hello_arguments('World');

    // Call the "hello" function
    const res = c.hello(args);

    // Check the result of the "hello" function is what is expected
    expect(res.value).toStrictEqual('Hello, World!');
  });
});
```

## The `/assembly/proto` directory:

The Koinos blockchain  leverages Google's [Protocol Buffers](https://developers.google.com/protocol-buffers) (Protobuf).

> Protocol buffers are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler.

The `proto` directory should look like this:

![proto folder image](/images/proto-folder-image.png "Proto directory")

- `myawesomecontract.proto` contains the protocol buffers definitions.
- `myawesomecontract.ts` is auto-generated AssemblyScript code based on the above proto file.

Let's have a look at `myawesomecontract.proto` for our `Hello World` contract:

```proto
syntax = "proto3";

package myawesomecontract;

// @description Says Hello!
// @read-only true
message hello_arguments {
  string name = 1;
}

message hello_result {
  string value = 1;
}
```

We will focus on the important parts of this file:

- `package myawesomecontract` is package name to which this proto file belongs, in this case, it's the name of the smart contract.
- `message hello_arguments` is divided into 3 parts:
  - `message` indicates that we are declaring a new proto message.
  - `hello` is the name of the smart contract function this message describes, in this case `hello`.
  - `arguments` describes the arguments of the function.
- `message hello_result` the message that describes the result of the function `hello`.

A smart contract function always contains an arguments and result message (even if the message is empty). Each arguments message can have the following commented annotations:

- `@description` describes what the function does.
- `@read-only` indicates is a read only function or not. Read only functions cannot write the blockchain database.

Inside each proto message are properties. In this case, `string name = 1;`, declares a property, `name`, of type, `string`, at field number, `1`. For further information about the Protobuf definition language, you can read [Google's Protobuf documentation](https://protobuf.dev/programming-guides/proto3/).

Whenever the contents of the proto directory are changed, you will need to compile it again so that the new AS files get generated. To do this, run the following command:

```console
yarn build:debug
```

This command will re-generate `myawesomecontract.ts`, `index.ts`, and `myawesomecontract.boilerplate.ts`.

## The `google` directory:
This directory contains the dependencies related specifically google protobuf.

## The `koinos` directory:
This directory contains the dependencies related specifically the koinos blockchain.


## The `build` directory:
The `build` directory is created when running `yarn build:release` or `yarn build:debug`.

It has two sub directories, the `debug` and `release`.  The `/build/debug` directory contains the smart contracts used for testing and is created when running `yarn build:debug`.

The `/build/release` directory contains the production smart contract `.wasm` file and is created when running `yarn build:release`. This `.wasm` file is ready to be uploaded to the Koinos Blockchain.

## Final Notes

You should now understand the folder structure of the `koinos-sdk-as-cli` boiler plates made by the `create` command.

