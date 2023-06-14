# Compile/Build your Contraact

Once you've finished creating your code and ran all of the tests, its time to build the release version and upload it to the blockchain.

To begin, build the release version by running the following command:

```
yarn build:release
```
The output should look something like this:
```
yarn run v1.22.15
$ koinos-sdk-as-cli build-all release 0 myawesomecontract.proto
Generating ABI file...
 yarn protoc --plugin=protoc-gen-abi=./node_modules/.bin/koinos-abi-proto-gen --abi_out=abi/ assembly/proto/myawesomecontract.proto 
$ /Users/tutorial/myawesomecontact/node_modules/.bin/protoc --plugin=protoc-gen-abi=./node_modules/.bin/koinos-abi-proto-gen --abi_out=abi/ assembly/proto/myawesomecontract.proto
Generating proto files...
yarn protoc --plugin=protoc-gen-as=./node_modules/.bin/as-proto-gen --as_out=. assembly/proto/*.proto
$ /Users/tutorial/myawesomecontact/myawesomecontract/node_modules/.bin/protoc --plugin=protoc-gen-as=./node_modules/.bin/as-proto-gen --as_out=. assembly/proto/myconmyawesomecontracttract.proto
Generating boilerplate.ts and index.ts files...
yarn protoc --plugin=protoc-gen-as=./node_modules/.bin/koinos-as-gen --as_out=assembly/ assembly/proto/myawesomecontract.proto
$ /Users/tutorial/myawesomecontract/node_modules/.bin/protoc --plugin=protoc-gen-as=./node_modules/.bin/koinos-as-gen --as_out=assembly/ assembly/proto/myawesomecontract.proto
Compiling index.ts...
node ./node_modules/assemblyscript/bin/asc assembly/index.ts --target release --use abort= --use BUILD_FOR_TESTING=0 --disable sign-extension --config asconfig.json
✨  Done in 4.04s.
```

Once the build completes, you will need to locate your `.wasm` and `.abi` file to upload to the blockchain.

Your `.wasm` file is located in the following directory:

```
/myawesomecontract/build/release/contract.wasm
```
Your `.abi` file is located in the following directory:
```
/myawesomecontract/abi/myawesomecontract.abi
```

Next, we'll create a wallet on the Koinos Blockchain so we can upload our contract.