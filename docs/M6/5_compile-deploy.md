# Compile the Token Project

___Note: The commands available for this launcher are located in the package.json file.___

From the `/contracts` folder, run the following command to build your contract.

```
yarn token:build
```
You should get a response that looks similar to this:

```
yarn run v1.22.15
$ yarn token:precompile && yarn token:asbuild:release
$ koinos-precompiler-as contracts/token
source file copied to /Users/learnkoinos/koinos-contracts-as/contracts/token/build
/Users/learnkoinos/koinos-contracts-as/contracts/token/build/proto/token.proto
proto files generated at /Users/learnkoinos/koinos-contracts-as/contracts/token/build/proto
interfaces generated at /Users/learnkoinos/koinos-contracts-as/contracts/token/build/interfaces
abi file generated at /Users/learnkoinos/koinos-contracts-as/contracts/token/build/token-abi.json
precompilation generated at /Users/learnkoinos/koinos-contracts-as/contracts/token/build/index.ts
$ asc contracts/token/build/index.ts --config contracts/token/asconfig.json --use abort= --target release
✨  Done in 5.89s.
```

If all is well, then you've just compiled your token contract. 


### Step 4: Deploy your Token Project

Unlike the `koinos-sdk-as-cli` which is a more generalized SDK that can be used to create any type of smart contract, the `koinos-contracts-as`token builder includes a deployer module.

Since we already setup our `.env` file earlier, we simply need to execute the following command:

```
yarn token:deploy
```
You should get a response that looks similar to this:

```
yarn run v1.22.15
$ ts-node contracts/token/scripts/deployment.ts
TypeError: Cannot read properties of undefined (reading '0')
    at bitcoinDecode (/Users/learnkoinos/koinos-contracts-as/node_modules/koilib/src/utils.ts:166:12)
    at Function.fromWif (/Users/learnkoinos/koinos-contracts-as/node_modules/koilib/src/Signer.ts:262:37)
    at /Users/learnkoinos/koinos-contracts-as/contracts/token/scripts/deployment.ts:15:35
    at step (/Users/learnkoinos/koinos-contracts-as/contracts/token/scripts/deployment.ts:33:23)
    at Object.next (/Users/learnkoinos/koinos-contracts-as/contracts/token/scripts/deployment.ts:14:53)
    at /Users/learnkoinos/koinos-contracts-as/contracts/token/scripts/deployment.ts:8:71
    at new Promise (<anonymous>)
    at __awaiter (/Users/learnkoinos/koinos-contracts-as/contracts/token/scripts/deployment.ts:4:12)
    at main (/Users/learnkoinos/koinos-contracts-as/contracts/token/scripts/deployment.ts:49:12)
    at Object.<anonymous> (/Users/learnkoinos/koinos-contracts-as/contracts/token/scripts/deployment.ts:49:1)
✨  Done in 0.79s.
```

If all is well, then you've just deployed your token contract to the address you've entered previously in the `_TOKEN_CONTRACT_ID` field. You can register the token in your `koinos-cli` wallet and begin to interact with it. You may also use [Koinos Blocks](http://koinosblocks.com) to interact with your token. Just search the `_TOKEN_CONTRACT_ID` in the search field of Koinos Blocks.

For more guidance on interacting, see our previous lesson on [Interacting With Your Smart Contract](/L1/8_interacting.md)

