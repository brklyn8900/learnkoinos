
# Create Your Hello World Project directory

Every `koinos-sdk-as` project begins by creating the project folder. Let's use `create` to start a project called `myawesomecontract`. To begin, run the following command:

```
koinos-sdk-as-cli create myawesomecontract
```
The output should look something like this:

```
Generating contract at "/Users/tutorial/myawesomecontract"...

Contract successfully generated!

You're all set! Run the following set of commands to verify that the generated contract is correctly setup:

  cd /Users/tutorial/myawesomecontract && yarn install && yarn build:debug && yarn test
```

At the end of the output are a set of commands that you can copy and use directly. Here is a breakdown for each command what it does:

- `yarn install`: Installs all the dependencies needed for the SDK. This only needs to be ran once per a project folder. It must be executed inside the project folder.
- `yarn build:debug`: Compiles the smart contract into Web Assembly using a debug build. You should run this each time you change your smart contract so you can test it.
- `yarn test`: Runs the unit tests on the compiled smart contract.

Note: These commands can be found in the `package.json` file in your project folder. After running these commands, the output should look something like this:

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

After running through this process, you now have a project development folder that has been tested to function correctly. 

The core of your smart contract development work will involve the following files:

Protobuf file: `\myawesomecontract\assembly\proto\myawesomecontract.proto`.

Contract Logic: `\myawesomecontract\assembly\myawesomecontract.ts`.

