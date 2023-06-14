# Setup the .env file

The `koinos-contract-as` token builder contains a deployment script so you do not need manually deploy via the `koinos-cli` wallet.

To use the automatic deployer, you must clone the `env.example` file and modify it. To begin, clone and rename the file as `.env` using the following command:

```
cp env.example .env
```
Open `.env` with the editor of your choice. Once open, it should appear something like this:

```
HARBINGER_MANA_SHARER_PRIVATE_KEY=
HARBINGER_TOKEN_CONTRACT_PRIVATE_KEY=
HARBINGER_TOKEN_CONTRACT_ID=

MAINNET_MANA_SHARER_PRIVATE_KEY=
MAINNET_TOKEN_CONTRACT_PRIVATE_KEY=
MAINNET_TOKEN_CONTRACT_ID=
```

If you are developing on test net, fill in the information for `HARBINGER`, if you are developing on main net, fill in the information for `MAINNET`. 

- The `_MANA_SHARER_PRIVATE_KEY` is the private key to a Koinos wallet that containts liquid $KOIN. This wallet is used to cover the Mana cost of uploading the `.wasm` and `.abi` file to the Koinos Blockchain. If you are working on testnet and need testnet $KOIN ($tKOIN) then head over the discord faucet to get some for free. For main net, you will need to buy $KOIN from a CEX or DEX.

- The `_TOKEN_CONTRACT_PRIVATE_KEY` is the private key to the wallet address that will hold your smart contract. You may create a wallet using `koinos-cli` or any of the 3rd party wallets.

- The `_TOKEN_CONTRACT_PRIVATE_KEY` is the wallet address associated with the `_TOKEN_CONTRACT_PRIVATE_KEY`.

In total, you will need two wallets and their private keys. One wallet containts $KOIN, while the other can have no $KOIN. The purpose of this is so you can deploy a smart contract to an empty wallet.