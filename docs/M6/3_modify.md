# Customize 

Customize the specifics of the NFT project by first modifying `token/assembly/Token.ts`. 

Define the following:
`_name:` The Name of your Token
`_symbol`: The Symbol for your Token
`_decimals`: The decimal places for your token.

```
- _name: string = "Token";
- _symbol: string = "TKN";
- _decimals: u32 = 8;
```
Once you've made all your changes, build and debug your project with the following command:

```
yarn build:debug
```

Run unit test by using the following command:

```
yarn test
```
