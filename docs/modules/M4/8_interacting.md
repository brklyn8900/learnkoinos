# Interacting with myawesomecontract via KoinosBlocks

Since our contract is on the Harbinger Testnet, we'll visit [Koinosblocks - Harbinger Testnet](https://harbinger.koinosblocks.com) and enter the address we just uploaded our contract to in the search box which is `19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE`. Under Read Only methods, open the `hello - Says hello` filed and click read.

![image](images/1_interacting.png)


# Interacting with myawesomecontract via Koinos CLI

Once the contract is uploaded, we can use our contract with the `Koinos CLI` by registering the address we previously uploaded the contract to. Remember that all koinos address natively support smart contracts so terms like `wallet ID` or `contract address` refer to the same address.

Our smart contract is located at the wallet address `19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE`. This contract is live and you can register it to try it out yourself!

Open the `koinos-cli` and type the following command to register your contract:

```
register myawesomecontract 19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE
```
You will get the following response:

```
Contract 'myawesomecontract' at address 19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE registered
```

By typing `myawesomecontract`, you will automatically get a list of available commands that can be executed with `myawesomecontract`. We'll use the `.hello` entrypoint and provide it with any string to get a response as shown:

```
myawesomecontract.hello anymessage
value:  "Hello, anymessage!"
```

Thats it, great job on your first smart contract! If you're ready, try our [7-day-dApp challenge!](/7_day_dapp/1.0_introduction.md)

