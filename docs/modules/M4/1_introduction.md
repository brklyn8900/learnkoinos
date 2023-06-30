# Developing on Koinos

Koinos offers multi-language support but the overwheming majority of smart contracts will likely be developed using TypeScript for Web Assembly, also known as Assembly Script. Typescript developers won't need much, if any additional work to adapt to Assembly Script.

This guide will walk the developer through the full installation and usage of the official Koinos AssemblyScript SDK known as `koinos-sdk-as`.

Once the SDK is installed, developing a Koinos smart contrac project is as simple as:

1. Generate a new project environment using the SDK.
2. Develop the proto and logic files of the smart contract
3. Compile the contract using the SDK to create the `.wasm` and `.abi` files.
4. Create a wallet address and upload the `.wasm` and `.abi` files to the blockchain using the `Koinos CLI`.

Let's begin.