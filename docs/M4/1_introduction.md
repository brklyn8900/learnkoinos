# Developing on Koinos

Koinos features a robust decentralized community as a result of its early launch. Because of this, there are several developers who have created different methods to create and deploy smart contracts on Koinos.

The method shown in this particular lesson uses the `koinos-sdk-as-cli` which was originally created by independent developer named Roamin and adopted officially by Koinos Group, the company behind the creation of the Koinos Blockchain.

___Note:The `koinos-sdk-as-cli` defines the ABI data within the proto files, where as the `koinos-contracts-as` (used in lesson 3) uses  `koinos-precompiler-as` which defines the ABI data inside the TS files. While they appear similar, we provide seperate guides on how to use them.___

In this first lesson, we will run through the full usage of the `koinos-sdk-as-cli` including its intial setup. Once setup, developers will find that creating a smart contract can be done in the following steps:

1. Create the project boiler plate with the SDK
2. Write their smart contract logic
3. Compile their contract and gather the contract `.wasm` and `.abi` files.
4. Create a wallet address
5. Upload the `.wasm` and `.abi` files to the new wallet address using the `Koinos CLI`.

In just 5 simple steps, developers can quickly get their contract on chain.