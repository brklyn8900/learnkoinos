
# Installing the `koinos-sdk-as-cli`

Before we install the SDK, we must ensure that the development environment has all of the required dependencies. 

We strongly recommend using a Mac or Linux to develop smart contracts. While all of these steps can be done on a Windows machine, it requires significantly more troubleshooting to set up the environment.

## Step 1: Install NodeJS

Install [NodeJS](https://nodejs.org/) for your specific machine. 

___Be aware that you may need to use `nvm` or the node version manager to set the different versions of NodeJS. We have tested to ensure that version 16.13.1 works with the SDK.___

__Notes for Installation on Mac Silicone (M1/M2):__

If find an error with `NodeJS` when compiling smart contracts that appears similar to this output:
```
npm ERR! command /usr/local/bin/node /usr/local/lib/node_modules/npm/bin/npm-cli.js install --force
--cache=/Users/motoengineer/.npm --prefer-offline=false --prefer-online=false --offline=false --no-progress --no-save
--no-audit --include=dev --include=peer --include=optional --no-package-lock-only --no-dry-run
```
Then try running this command:
```
sudo chown -R 501:20 "/Users/{username}/.npm"
```

## Step 2: Install Google Protocol Buffers

`Protobuf` is necessary to build `.proto` files for Koinos Smart Contracts. 

Follow the instructions at the [Protobuf github repo](https://github.com/protocolbuffers/protobuf) for the binarys specific to your machine.

### Intel Macs:
Use homebrew package manager to easily install protobuf for your Intel Mac using the following command:
```
brew install protobuf
```

### Apple Silicon M1/M2:

Use homebrew package manager to easily install protobuf for your Apple Silicone Machine, you may easily install protobuf for your M1 silicone chip using the following command:
```
arch -arm64 brew install protobuf
```

### Linux:
You may easily install protobuf for your machine using the following command:
```
sudo apt install protobuf-compiler
```

### Windows:

We've found the following guide to be useful for installing `Protobuf` on windows, just be sure to use the latest version of `protobuff`:

[How to Install Protocol Buffers on Windows](https://www.geeksforgeeks.org/how-to-install-protocol-buffers-on-windows/)


### Verify your installation:

After installation, you may verify protoc is installed using the following commands regardless which machine you are using:


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



__You are now ready to install the `koinos-sdk-as-cli`!__

# Step 3: Install the Official Koinos Assembly Script SDK

We will use Yarn Package Manager to perform the installation, but NPM will work as well. 

Install the Koinos AssemblyScript CLI by running this command in your terminal:

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
