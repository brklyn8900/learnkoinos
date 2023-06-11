# Interacting with Smart Contracts

Believe it or not, you've already interacted with a smart contract! The $KOIN token is a system level smart contract that was pre-registered to the `koino-cli` in the `.koinosrc` file!

In this chapter, we will be reviewing how to register new contracts and what you should expect when doing so.  The typical process is:

1. Collect the wallet address for the smart contract you wish to interact with.
2. Register the smart contract with a user defined name.
3. Call the commands begining with the user defined name.

## Collect the wallet address for the Smart Contract

When interacting with a new contract address, PLEASE BE SURE THAT YOU TRUST THIS CONTRACT FIRST! Interacting with a contract that you do not trust can result in lost of funds. We strongly suggest you use a `smart wallet` to handle interacting with unknown smart contracts! OR follow our Pro Tip below: 


___💡 Pro tip: ALWAYS generate a new wallet and supply it with the minimum number of $KOIN tokens that you need to complete the transaction you wish. For example, if you are interacting with a new NFT contract that cost 100 $KOIN, create a new wallet and send 100 $KOIN + some extra for the Mana cost___

## Register the Smart Contract

In this example, we will be interacting with the Koinos Acccount Protocol's namepsace contract on the `Harbinger Test Net`. The contract address is `1H3k4zttAjF7qfTqfmKZ4ZCdUL3pRdGnpG`. To register the contract, use the following command:

```
🔓 > register namespace 1H3k4zttAjF7qfTqfmKZ4ZCdUL3pRdGnpG
```

You will notice that this is the exact same command located in your `.koinosrc` file! If your register is successful, you will recieve the following response:

```
Contract 'namespace' at address 1H3k4zttAjF7qfTqfmKZ4ZCdUL3pRdGnpG registered
```

When using the register command, the name of the contract is userdefined. We chose to use `namespace` but you can call it anything you wish.

To see what commands are available with this smart contract, use the `list` command and you should see a full list of available commands, including the new contract which you just registered. It will look something like this:

```
...
namespace.set_metadata                    - Set contract metadata
namespace.set_royalties                   - Unsupported
namespace.symbol                          - Returns the token's symbol
namespace.total_supply                    - Gets the total number of minted tokens
namespace.transfer                        - Transfer ownership of a name or TLA
namespace.transfer_ownership              - Transfer ownership of the contract
namespace.uri                             - Returns the token's uri
...
```

Note: If the smart contract was uploaded without an "Application Binary Interface" or `.abi` file, then these entrypoints will not be available and you will get an error.

You may now use the `--help` flag on any of these commands to learn thier usage. This process will apply to any smart contract address.