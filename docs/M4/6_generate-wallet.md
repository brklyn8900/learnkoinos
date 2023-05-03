# Generate a New Wallet to Hold Your New Smart Contract:

To create a wallet, we'll be using `Koinos CLI`. If you arent familiar with how the `Koinos CLI` works, head over to our lesson on [The Koinos CLI](/M0/1_introduction.md) to get started.

Once you have the `Koinos CLI` installed, create a new wallet using the following command:
```
🔐 > create my.wallet azerty
```
Here, we created a new wallet called `my.wallet` and it is encrypted with the password `azerty`.

You should see output similar to this:

```

🔐 > create my.wallet azerty
Created and opened new wallet: my.wallet
Address: 19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE

```
The file `my.wallet` will be generated automatically in the directory where `.koinos-cli` was executed.

You may also use the command `generate` which will display the address and private key, but it will not automatically save the wallet information, you will need to follow up with the import command. If you need to see your address again, you can with the `address` command.

If you are just getting started with Koinos and are trying out our test net, you can grab some free `tKOIN` to interact with the network. Follow the [Using the Discord Faucet](/M0/using-the-faucet) tutorial to get 100 `tKoin`.

Once you get your `tKOIN` from the fountain,  you can query your balance with the `koin.balance_of` command which will display your new balance of 100 `tKOIN`. While it appears as `KOIN`, be assured that it is actually `tKOIN` unless you are connected to the main net RPC and have bought real `KOIN` from an exchange.

```
🔓 > koin.balance_of
100 KOIN
```

Now that we have some `tKOIN`, lets upload our smart contract.