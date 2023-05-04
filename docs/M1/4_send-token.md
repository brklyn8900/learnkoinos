# Sending your first Koinos Transaction

Remember that you can always run `help` against any command to learn more about it. Notice that the command `help` always provides `Usage` instructions. Try this with the `koin.transfer` command:

```

🔐 > help koin.transfer
Transfers the token
Usage: koin.transfer <to:address> <amount:amount>

```
In this case, to use the command `koin.transfer`, you need two additional arguments, the first is the `to:address` field which is the destination address, and the other is the `amount:amount` field which is the total amount of $KOIN you wish to transfer. Fill in this information and hit enter. You must have an open wallet to be able to use this command.

___NOTE! When transfering $KOIN or $VHP, the number 1 represents 1 $KOIN. However, when transfering any other token, 1 preresents the smallest denomination of a token or 0.00000001.___


In this example, we will transfer 1 $KOIN from our open wallet to `15NwWEwTFutSPYqMvbYWew44SDxNzdkhAJ`

```

🔓 > koin.transfer 15NwWEwTFutSPYqMvbYWew44SDxNzdkhAJ 1
Transferring 1 KOIN to 15NwWEwTFutSPYqMvbYWew44SDxNzdkhAJ
Transaction with ID 0x12201061fcf45a18e6b2f613ff94b720a7222cc40f4be389f431d921c58980a7f5e5 containing 1 operations submitted.
Mana cost: 0.12764436 (Disk: 0, Network: 311, Compute: 575773)
```

Here we have several bits of information. We see confirmation of our commands, a transaction ID, the number of operations and how much Mana is used.

To confirm this transaction was picked up by the network, we can enter our transaaction ID onto a block explorer like [KoinosBlocks](http://koinosblocks.com). When using KoinosBlocks to verify transactions, don't forget to set your RPC node for either main net or test net!

Next, we'll learn how to interact with a smart contract via Koinos CLI.