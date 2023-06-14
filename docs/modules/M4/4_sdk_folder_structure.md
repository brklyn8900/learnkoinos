# Understanding the SDK Folder Structure

Now that we have the `koinos-sdk-as-cli` installed and we created a project  `myawesomecontract`, lets understand the folder structure of the boiler plate so you can easily navigate it. Open your folder in your prefered code editor, in this example, we will be using VSCode. It should look similar to this:

![file structure image](/images/vscode-file-structure-image.png "File structure")

## The `abi` directory:
ABI stands for Application Binary Interface. While it is not necessary to have an `.abi` file, it is strongly recommended to include this in your project so others can easily interact with your smart contract.

This directory contains your `.abi` file. Initially this folder is empty, however after running `yarn build:release`. the `.abi` file is created.


## The  `assembly` directory:
All of the smart contract-related code lives in the `assembly`. Most of our attention will be focused here.

![assembly folder image](/images/assembly-folder-image.png "Assembly directory")

- `__tests__` contains the unit tests for the contract.
- `proto` contains custom proto files for the contract.
- `index.ts` contains the logical entry point of the contract.
- `Myawesomecontract.boilerplate.ts` contains boilerplate auto-generated example code based on the proto files. This file should be copied and the phrase `.boilerplate` should be removed. This new file should now contain your produciton level code. Each time you build your contract, this file will be replaced so never code directly on this boiler plate file.
- `Myawesomecontract.ts` contains the actual code of the smart contract, copied from `Myawesomecontract.boilerplate.ts` above.
- `tsconfig.json` tells the IDE what types are available in AssemblyScript, AS is like TypeScript but with WebAssembly types.


## The `/assembly/__tests__` directory:

In `__tests__` we should have a file called `myawesomecontract.spec.ts` containing unit tests for the smart contract.

Let's have a look at the actual unit test implementation. Comments have been added to the code that hasn't been explained previously:

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

Let's have a look at `myawesomecontract.proto`:

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
The `build` directory does not initally exist. It has two sub directories, the `debug` and `release`.  The `/build/debug` directory is for testing and is created when running `yarn build:debug`.

The `/build/release` directory contains the the `.wasm` file that contains your smart contract logic in binary form. It is to be uploaded to the Koinos Blockchain and created after running `yarn build:release`.

## Final Notes

Thats it, you should now understand the folder structure of the `koinos-sdk-as-cli` boiler plates made by the `create` command.