# Developing on Koinos

Koinos offers multi-language support but the overwheming majority of smart contracts will likely be developed using TypeScript for Web Assembly, also known as Assembly Script. Don't worry there aren't many differences between TypeScript and AssemblyScript.

This guide will walk the developer through the installation of the official SDK of Koinos for TypeScript/AssemblyScript known as `koinos-sdk-as-cli`.

We will run through the full usage of the `koinos-sdk-as-cli` including its intial setup. Once setup, developers can quickly launch a development space for their smart contract. 

Once the SDK is installed, developing a smart contract project begins with the following steps:

1. Generate a new project environment using the SDK.
2. Develop the proto and logic files of the smart contract
3. Compile the contract using the SDK to create the `.wasm` and `.abi` files.
4. Create a wallet address and upload the `.wasm` and `.abi` files to the blockchain using the `Koinos CLI`.

In just 4 simple steps, developers can quickly get their contract on chain.