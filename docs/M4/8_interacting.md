# Interacting with a Smart Contract via Koinos CLI

Once the contract is uploaded, we can test the `.abi` using `Koinos CLI` by registering the address we previously uploaded the contract to. Remember that all koinos address natively support smart contracts so terms like `wallet ID` or `contract address` refer to the same address.

For this particular example, we will use the following `19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE` which we previously deployed on the `HARBINGER TEST NET`. This contract is live and you can register it to try it out yourself.

Open the `koinos-cli` and type the following command to register your contract:

```
register mycontract 19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE
```
You will get the following response:

```
Contract 'mycontract' at address 19yp497RPiuWwsNUWp9cHWfbWUupHsRQLE registered
```

By typing `mycontract`, you will automatically get a list of available commands that can be executed with `mycontract`. Simiarly, you can also type `list` to see all available commands.

You may use any name you want in place of `mycontract`, it will only change the name shown on `koinos-cli`.
