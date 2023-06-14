
# Installing the `koinos-sdk-as-cli`

Before we install the SDK, we must ensure that the development environment has all of the required dependencies. 

## Step 1: Prepare the Dev Environment

### INSTALL NODEJS

`NodeJS` is necessary to develop and build the smart contract. Follow the instructions at [the NodeJS website](https://nodejs.org/) for installation guide specific to your machine. 

___Be aware that you may need to use `nvm` or the node version manager to set the correct version. We have tested to ensure that version 16.13.1 works.___

#### Notes for Installation on Mac M1s:
You may find an error with `NodeJS` when compiling smart contracts that appears similar to this output:
```
npm ERR! command /usr/local/bin/node /usr/local/lib/node_modules/npm/bin/npm-cli.js install --force
--cache=/Users/motoengineer/.npm --prefer-offline=false --prefer-online=false --offline=false --no-progress --no-save
--no-audit --include=dev --include=peer --include=optional --no-package-lock-only --no-dry-run
```
If you find this error, try running this command:
```
sudo chown -R 501:20 "/Users/{username}/.npm"
```

### INSTALL PROTOBUF
`Protobuf` is necessary to build .proto files for Koinos Smart Contracts. Follow the instructions at the [Protobuf github repo](https://github.com/protocolbuffers/protobuf) for the binarys specific to your machine.

### Protobuf Installation Method 1 (recommended):
For __Intel Macs__ using homebrew package manager, you may easily install protobuf for your Intel Mac using the following command:
```
brew install protobuf
```

For __Mac M1__ Machines using homebrew package manager, you may easily install protobuf for your M1 silicone chip using the following command:
```
arch -arm64 brew install protobuf
```

For __Linux machines__, you may easily install protobuf for your machine using the following command:
```
sudo apt install protobuf-compiler
```

After installation, verify protobuf is installed using the following command:
```
protoc --version
```
The response should be (exact version may vary):
```
>libprotoc 3.21.12
```
Verify the directory for protoc is in your $PATH using teh following command:
```
which protoc
```
The output should match the directory of your shell, otherwise be sure to include the path of your installation into your specific shell and try again.


### Protobuf Installation Method 2:
For __Mac M1__ Machines, you will need the aarch_64 binary.
For __Mac Intel__ machines, you will use the universal binary.
For __Linux__, you will use the x86 binary or aarch_64 binary, depending on your CPU architecture.

Follow the installation within the downloaded zip for installation instructions.

__You are now ready to install the `koinos-sdk-as-cli`!!!__

# Step 2: Install the SDK

For this example, we will be using the Yarn Package Manager, but NPM will work as well. 

Install the Koinos AssemblyScript CLI by running this command:

```
yarn global add @koinos/sdk-as-cli
```

The `koinos-sdk-as-cli` should be installed globally, we can check by running this command:

```
$(yarn global bin)/koinos-sdk-as-cli -V
```

The output should read `1.0.4` or the current version of the [AS SDK CLI Node package](https://www.npmjs.com/package/@koinos/sdk-as-cli).

For the remainder of this guide, we will be calling `koinos-sdk-as-cli` directly. To do this, be sure to add `$(yarn global bin)` to your `PATH` to be able to use the CLI directly if it hasn't done this automatically.

__You are now ready to begin using the SDK!!!__
