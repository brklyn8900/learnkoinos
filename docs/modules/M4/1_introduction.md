# Developing on Koinos

Koinos offers multi-language support but the overwheming majority of smart contracts will likely be developed using TypeScript for Web Assembly, also known as Assembly Script. Don't worry there aren't many differences between TypeScript and AssemblyScript.

This guide will walk the developer through the installation of the official SDK of Koinos for TypeScript/AssemblyScript known as `koinos-sdk-as-cli`.

In this first lesson, we will run through the full usage of the `koinos-sdk-as-cli` including its intial setup. Once setup, developers can quickly launch a development space for their smart contract. 

The full process should typically encompase the following steps once the SDK is installed:

1. Launch a new `koinos-sdk-as` project using `koinos-sdk-as-cli`.
2. Develop the logc of the smart contract.
3. Compile their contract to produce the `.wasm` and `.abi` files for each smart contract.
4. Create a wallet address and upload the `.wasm` and `.abi` files using the `Koinos CLI`.

In just 4 simple steps, developers can quickly get their contract on chain.