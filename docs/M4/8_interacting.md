# Interacting with myawesomecontract via KoinosBlocks

We are working with Koinos Testnet, so isit [Koinosblocks - Harbinger Testnet](https://harbinger.koinosblocks.com) and enter the address we just uploaded our contract to in the search box. `19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE`. Under Read Only methods, open the `hello - Says hello` filed and click read.

![image](images/1_interacting.png)


# Interacting with myawesomecontract via Koinos CLI

Once the contract is uploaded, we can test the `.abi` using `Koinos CLI` by registering the address we previously uploaded the contract to. Remember that all koinos address natively support smart contracts so terms like `wallet ID` or `contract address` refer to the same address.

For this particular example, we will use the following `19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE` which we previously deployed on the `HARBINGER TEST NET`. This contract is live and you can register it to try it out yourself.

Open the `koinos-cli` and type the following command to register your contract:

```
register myawesomecontract 19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE
```
You will get the following response:

```
Contract 'mycontract' at address 19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE registered
```

By typing `myawesomecontract`, you will automatically get a list of available commands that can be executed with `myawesomecontract`. We'll use the `.hello` entrypoint and provide it with any string to get a response as shown:

```
myawesomecontract.hello anymessage
value:  "Hello, anymessage!"
```

Thats it!