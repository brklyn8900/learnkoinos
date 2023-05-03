# Customize 

Customize the specifics of the NFT project by first modifying `assembly/Constants.ts`. 

Define the following:

- `NAME`: Name of the NFT collection
- `SYMBOL`: The symbol of the NFT collection
- `MINT_PRICE`: The cost to mint the NFT. Paid for by the minter.
- `MINT_FEE`: When false, minting can only be done by the owner (for pre-mints). When set to true, anyone can mint (mint on demand by user).
- `MAX_SUPPLY`: The maximum number of NFTs that may be minted.
- `URI`: Provide the metadata for your NFT collection.
- `OWNER`: The contract which owns the collection and is able to update the contract.
- `TOKEN_PAY`: Is the address of the payment token. In many cases, this will be $KOIN but can be others too, such as a future stablecoin.
- `ADDRESS_PAY` is the address where the `MINT_FEE` is sent to.

```import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "";
  export const SYMBOL: string = "";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 100000000000000;
  export const URI: string = "";
  export const OWNER: Uint8Array = Base58.decode("");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("");
}
```
You may also modify `/assembly/Collections.ts` to suit your project needs. Once you've made all your changes, build and debug your project with the following command:

```
yarn build:debug
```

Run unit test by using the following command:

```
yarn test
```
