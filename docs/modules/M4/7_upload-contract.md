# Deploying your smart contract

We now have a wallet with some `$tKOIN` (or $KOIN if you are on main net). You'll also have a `.wasm` and `.abi` file.


__Remember, if you following this lesson on testnet, use the testnet `koinosrc` file when using Koinos-CLI!__

From `koinos-cli` open your new wallet address and enter the following command to upload the `.wasm` and `.abi` files we created previously:

```
upload myawesomecontract/build/release/contract.asm myawesomecontract/abi/myawesomecontract.abi
```

You will get the following as a response that includes the transaction ID:

```
Contract uploaded with address 19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE
Transaction with ID 0x122096042fb2e2c085eb4e78cb80a4933e6cda21ebf65722e2c0f283f39a9ba40f2a containing 1 operations submitted.
Mana cost: 0.38643078 (Disk: 16472, Network: 17562, Compute: 177948)
```

Next, we'll interact with this contract.


**Important note:** The wallet/address we use to upload a contract will be the address of the contract itself. This means that the address `19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE` is the address of the wallet we created earlier, but it is also the address of the contract. Smart contracts are users in Koinos. Additionally, the block size limit on the Koinos blockchain is set to 200kb which means that the contract's WASM files cannot exceed this size. If it does, splitting the logic into several smaller contracts would be necessary.  

As you can see, the upload cost us `0.38643078 Mana`. Mana is not a fee, but a regenerative resource intrinsic to each KOIN, which means we didn't spend any actual tKOIN (or KOIN on mainnet) to upload our contract.
  

We can check the transaction on a block explorer to confirm it's been successfully uploaded. 

For harbinger testnet, use [Koinos Blocks for Harbinger](http://harbinger.koinosblocks.com).

For Koions main net, use [Koinos Blocks for Main Net](http://koinosblocks.com)

Since we uploaded our contract to the Harbinger test net, we'll use the second link and search `0x12205d19a5e9fc1a8d12478b7ff761c7b4619b9770404da2dff41d872cd0f0e6fdf8` which brings us to the transaction information, confirming the upload was successful.