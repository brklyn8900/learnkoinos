# Create a new Koinos Wallet

To create a new Koinos Wallet, we will use the `create` command. As mentioned before, you can always add the `--help` flag to any command and it will provide you with instructions on the usage, heres an example of how that would appear for the `create` command:

```

🔐 > help create
Create and open a new wallet file
Usage: create <filename:file> [password:string]

```

We will now create a new wallet, with a file named `my.wallet` and encrypt the wallet file with the password `azerty`. If successful the output should look like this:

```

🔐 > create my.wallet azerty
Created and opened new wallet: my.wallet
Address: 19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE

```

The `my.wallet` file is an encrypted file that contains the private key to this newly generated wallet. It will be located in the directory where the `koinos-cli` binary was executed from. Please keep this file safe!

**_💡 Pro tip: Place a copy of this file and the `koinos-cli` on a seperate USB that is secured!_**

Another method to create a Koinos wallet is to use the `generate` command which displays the wallet public and private key, but it will not automatically save the wallet information. You will need to record this information and then use the `import` command to create the wallet file.

If you need to see your wallet address again, you can view it by calling the `address` command.

## Bonus

If you are just getting started with Koinos and are trying out our test net, you can grab some free `tKOIN` to interact with the network. Follow the [Using the Discord Faucet](../M1/using-the-faucet.md) tutorial to get 100 free `tKoin`.

Once you get your `tKOIN` from the fountain, you can query your balance with the `koin.balance_of` command which will display your new balance of 100 `tKOIN`. While it appears as `KOIN`, be assured that it is actually `tKOIN` unless you are connected to the main net RPC and have bought real `KOIN` from an exchange.

```
🔓 > koin.balance_of
100 KOIN
```
