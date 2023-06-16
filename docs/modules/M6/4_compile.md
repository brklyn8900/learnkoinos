# COMPILE THE CONTRACT

Once all your modifications have been made, you're now ready to build the release version. To do this, use the following command from the `assembly/token` directory.

```
yarn build:release
```

Once the build completes, you will need to locate your `.wasm` and `.abi` file to upload to the blockchain.

Your `.wasm` file is located in the following directory:

```
/koinos-sdk-as-examples/token/assembly/build/release/contract.wasm
```

Your `.abi` file is located in the following directory:

```
/koinos-sdk-as-examples/token/assembly/build/release/token.abi
```

With these two files, generate a koinos wallet with `koinos CLI` and deploy as shown in [Module 4: Uploading your Smart Contract](../M4/7_upload-contract.md).
