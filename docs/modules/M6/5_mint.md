# MINT TOKENS

## Using Koinos CLI

Register your new token address with `koinos-cli` as shown in [Module 1](../M1/1_introduction) and run the `mint` method.

## Using Koinos Blocks

Head over to [KoinosBlocks](http://koinosblocks.com) and enter the address that you uploaded your NFT smart contract to in the search bar.

Connect to Koinos Blocks with Kondor wallet that contains your NFT contract using the `Connect Wallet` button:

![connect-kondor](/images/connect-kondor.png "Connect Kondor")

Then scroll down to the `writeable options` as fill in the specified data:

`TO ADDRESS:` Is the address that the Tokens are being minted and sent to. Tokens cannot be minted and sent to its own wallet address!

`VALUE unit64:` Input the number of Tokens to mint in this transaction. If you previously specified the `MAX_SUPPLY` to be 10, then the maximum number you can enter here is 10 or however many more Tokens can be minted until you reached 10.

Remember our previous discussion about rclimits from Module 2.

Sign and send, and you can play around with the `Read only methods` to check the total supply and more.

![mint](/images/mint.png "Mint")
