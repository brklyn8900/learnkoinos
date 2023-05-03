# Step 4: Final Setup

Once the node is shut down, enter the `BASEDIR`. In this example, if it was linux or mac, its in your home directory in a hidden folder called `/.koinos`. If you are using Windows and following this guide, it would be in the `c:\koinos-node` directory. 

Enter the hidden folder.
For Linux & Mac, use the following command:
```
cd ./koinos
```
for Windows navigate there manually or use the following command:
 
```
cd c:\koinos-node
```

Once you are in the directory with the node files, navigate to the `block_producer` directory with the following command

```
cd block_producer
```
In this folder, you will find two files, one called `private.key` and `public.key`.
Open public.key with you editor, in this case, we will use `nano` again.
```
nano public.key
```
Copy your public key value. This piece of information is not sensitive, but keep it secure. Sharing this key will not compromise your tokens or your machine.

### Registering your Mining Node 

You must register the public key of your newly launched Koinos mining node with the public key of a independent wallet. This is done for security purposes, such as  

You will now need access to the wallet that contains the $VHP (or $KOIN if you haven't burned it yet). The registration process associates the mining nodes public key (which you just retrieved) with the wallet containing the $VHP. This allows the mining node to use the $VHP within  the wallet and then deposit $KOIN rewards.

Go to [Koinos Blocks](http://koinosblocks.com) and at the top  of the page, click `contracts`, then click `pob Proof of Burn consensus algorithm` with the address `159myq5YUhhoVWu3wsHKHiJYKPKGUrGiyv`.

Click on the `Connect Kondor` at the top right corner, and follow the on screen prompts to connect Kondor Wallet to Koinos Blocks.

Under `writeable methods` click on `register_public_key` and fill in the requested information.
```
`PRODUCER` is the address of your Kondor Wallet that is connected.
`PUBLIC KEY` is the information contained in the public.key file that you retrieved earlier.
`SIGN AS` is the address of your Kondor Wallet that is connected.
 ```
Once that information is filled, clicked `Sign and send` and follow the prompts provided by Kondor.

### Burning your $KOIN to receive $VHP
Before you can begin mining, you must burn $KOIN to get $VHP. $VHP is a consumable "fuel" that is requried to operate your miner. As you mine, you lose $VHP and gain $KOIN back. When you run out of $VHP, you must replenish your $VHP supply by burning $KOIN again. There are no restrictions as to when you can reburn your $KOIN.

By running a mining node, you will always earn more $KOIN than you burned. To burn your $KOIN

Go to [Koinos Blocks](http://koinosblocks.com) and at the top  of the page, click `contracts`, then click `pob Proof of Burn consensus algorithm` with the address `159myq5YUhhoVWu3wsHKHiJYKPKGUrGiyv`. This is the same link you used to register your node.

Click on `Writeable Methods` again, and click `burn - Burn KOIN to receive VHP`and fill in the requested information.

```
`TOKEN AMOUNT` is how much $KOIN you wish to burn.
`BURN_ADDRESS` is address of the connected Kondor wallet.
`VHP_Address` is address of the connected Kondor wallet.
`SIGN AS` is address of the connected Kondor wallet.
```
Once that information is filled, clicked `Sign and send` and follow the prompts provided by Kondor.

# STEP 4: Restart the node!
With everything setup, we can now start the node! Return to your terminal and from the `~/koinos` folder (not the `~./koinos` or `c:\koinos-node`!) run
the following command again:
```
docker compose --profile all up -d
```
Your node will quickly catch back up to the current block height and once synced, it will begin to attempt to produce blocks until a successful block is created. You can see this process by checking block_producer logs with the following command:
```
docker logs koinos-block_producer-1
```

Thats it!