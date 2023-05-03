
# Setting Up your Hello World Contract

Every `koinos-sdk-as-cli` project begins by creating a boiler plate folder.

The `koinos-sdk-as-cli` automatically does this with the `create` command. We will begin by creating a project called `myawesomecontract`. To intiate this boilerplate development folder, run the following command:

```
koinos-sdk-as-cli create myawesomecontract
```

The `create` command will create a folder called `myawesomecontract` (or whatever argument you passed to the `create` command). The output should look something like this:

```
Generating contract at "/Users/tutorial/myawesomecontract"...

Contract successfully generated!

You're all set! Run the following set of commands to verify that the generated contract is correctly setup:

  cd /Users/tutorial/myawesomecontract && yarn install && yarn build:debug && yarn test
```

At the end of the output is a set of commands that you can copy and use directly. The command will move you from your current directory into your project folder, install the required dependencies, then build and test it to ensure proper deplopyment of the boilerplate.

You may also do this manually by running the following command,(replace with your specific directory):

```
cd /Users/tutorial/myawesomecontact
```
Once you are in your project directory, run the following commands:

```
yarn install && yarn build:debug && yarn test
```

Here is a breakdown for each command what it does:

- `yarn install`: Installs all the dependencies needed for the SDK. This only needs to be ran once per a project folder. It must be executed inside the project folder.
- `yarn build:debug`: Compiles the smart contract into Web Assembly using a debug build. You should run this each time you change your smart contract so you can test it.
- `yarn test`: Runs the unit tests on the compiled smart contract.

These commands can be found in the `package.json` file in your project folder.

If successful the output should look something like this:

```
[Describe]: contract

[Log] Hello, World!
 [Success]: ✔ should return 'hello, NAME!' RTrace: +21

    [File]: assembly/__tests__/Myawesomecontract.spec.ts
  [Groups]: 2 pass, 2 total
  [Result]: ✔ PASS
[Snapshot]: 0 total, 0 added, 0 removed, 0 different
 [Summary]: 1 pass,  0 fail, 1 total
    [Time]: 12.109ms

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  [Result]: ✔ PASS
   [Files]: 1 total
  [Groups]: 2 count, 2 pass
   [Tests]: 1 pass, 0 fail, 1 total
    [Time]: 3035.096ms
┌───────────────────────────────┬───────┬───────┬──────┬──────┬───────────┐
│ File                          │ Total │ Block │ Func │ Expr │ Uncovered │
├───────────────────────────────┼───────┼───────┼──────┼──────┼───────────┤
│ assembly/Myawesomecontract.ts │ 100%  │ 100%  │ 100% │ N/A  │           │
├───────────────────────────────┼───────┼───────┼──────┼──────┼───────────┤
│ total                         │ 100%  │ 100%  │ 100% │ N/A  │           │
└───────────────────────────────┴───────┴───────┴──────┴──────┴───────────┘

Done in 3.28s.
```

After running through this process, you now have a fully setup boilerplate development folder that has been tested to function correctly. 

The file that you need to edit to build your smart contraact is located at `\myawesomecontract\assembly\myawesomecontract.ts`.

