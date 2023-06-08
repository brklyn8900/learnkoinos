# Building the Smart Contract

In this chapter, we'll take the `gamestats.boilerplate.ts` and use it to create our production `gamestats.ts`.

`gamestats.boilerplate.ts`contains all of the entrypoints that we identified in our `.proto` file and conviently creates a skeleton for our production code. Do not build your code into the boilierplate file because it is regenerated each time you run `yarn build`!

## CLONE THE BOILERPLATE FILE

To begin, copy the `gamestats.boilerplate.ts`  and rename it `gamestats.ts`. Remember, if you add new entry points to your `.proto` file, regenerate the boilerplate by running `yarn build:release` and copy the new entrypoints into `gamestats.ts`. 

## GENERAL OUTLINE OF HOW GAMESTATS.TS WORKS

Before we breakdown our code, let us generally outline how the gamestats portion of our dApp works. This will help us understand the logically flow of information.

1. The `gamestats.ts` contains the core buisness logic and the directs the flow of data between the user and the blockchain. It refers to several other files to perform it's tasks.

2. Information that lives on chain, such as player information, game statistics, leaderboard information are stored on chain based on the logic coded into the `GameStatsStorage.ts`, `LeaderboardStorage.ts`, `MetadataStorage.ts` and `PlayerStorage.ts` files. The `gamestats.ts` file relies on the storage files to manage this task. 

3. Additionally, to aid in managing data types, we use `SpaceId.ts` file to serialize an array so we can retrieve data AND know what it's type.

In summary, we have one file to manage the logic (`gamestats.ts`), and several files (`GameStatsStorage.ts`, `LeaderboardStorage.ts`, `MetadataStorage.ts` and `PlayerStorage.ts`) to manage on chain state. This is a common framework amoung smart contracts no matter what langauge used. 

___PRO TIP! As you develop on Koinos, you'll often find that the way we structure the storage is a highly adaptable component to many dApps.___


## BUILD OUR GAMESTAT CONTRACT (PART 1: EXPORT CLASS)

Now that we generally understand the organization of our code, we'll deep dive into the logic behind our dApp's `gamestats.ts` code. The full code can be found here: https://github.com/koinos/1-week-challenge/blob/master/contracts/game-stats/assembly/Gamestats.ts


As mentioned in our general outline, there are several individual files used to build our smart contract. within our project we'll chase through these files is the particular line of code access other files.

We'll begin by looking at the first section of the code which is shown below. 

```
export class Gamestats {
  _contractId: Uint8Array = System.getContractId();

  _metadataStorage: MetadataStorage = new MetadataStorage(this._contractId);

  _playersStorage: PlayersStorage = new PlayersStorage(this._contractId);

  _gamesStatsStorage: GamesStatsStorage = new GamesStatsStorage(this._contractId);

  _leaderboardStorage: LeaderboardStorage = new LeaderboardStorage(this._contractId);

...
}
  ```

Let's now review each component.

## _contractID

The `contractID` is the wallet address that contains our smart contract. In most cases, the developer will not know which address they will upload their smart contract to.

It is therefore useful for the contract to know its own address. To do this, we create a variable called `_contractID` of Uint8Array type and call the `System` class from the `@koinos/sdk-as` module. The usage is as follows: 

  ```
    _contractId: Uint8Array = System.getContractId();
  ```

 To use the `System` class, we use the following import statement. 

 ```
 import { Protobuf, System, SafeMath, authority, Token } from "@koinos/sdk-as";
```


## _metadataStorage, _playersStorage, _gameStatsStorage & _leaderboardStorage

In many cases, we'll need to store information on chain. We must instantiate a memory state first. Since we have multiple storages, we'll look at the `_metadataStorage` as an example. 

To do this, we declare a variable called `_metadataStorage`of type `MetadataStorage` type  and call this from the `MetadataStorage` class. The usage is as follows:

```
  _metadataStorage: MetadataStorage = new MetadataStorage(this._contractId);
```
 To use the `MetadataStorage` class, we use the following import statement. 

```
import { MetadataStorage } from "./state/MetadataStorage";
```
We repeat this for each storage type.

___PRO TIP!___ The smart contract can only access storage from its own contractId.

___PRO TIP!___ It is good practice to use a new file to manage how storage space is instantiated and managed. We recommend you create these files in the `/assembly/state`folder.

Since we are still looking at the `gamestats.ts` file which references other files, let us chase  the `_metadataStorage` variable and look into the how the storage space is managed by the  `MetadataStorage` module. This module is located in `/assembly/state` as `MetadataStorage.ts`. Again we will only look at `_metadataStorage`, but the same concept applies to the other storage files.


Here is the complete code from the `MetadataStorage.ts`:

```
import { Storage } from '@koinos/sdk-as';
import { gamestats } from '../proto/gamestats';
import { METADATA_SPACE_ID } from './SpaceIds';

export class MetadataStorage extends Storage.Obj<gamestats.metadata_object> {
  constructor(contractId: Uint8Array) {
    super(
      contractId, 
      METADATA_SPACE_ID, 
      gamestats.metadata_object.decode, 
      gamestats.metadata_object.encode,
      () => new gamestats.metadata_object()
    );
  }
}
```

We have several import statements and the constructor that creates our class. Let's look at each line of code.

#### import statements

We import `Storage` class from the built in `@koinos/sdk-as` module which gives us an easy way to interact with the data stored in the contract. Storage has 3 sub-classess, more information found here: https://koinos.github.io/koinos-sdk-as/modules/Storage.html

We import `gamestats` class from our `.proto` file which defines all of our entrypoints. This is necessary to bring in the `contractID`.

We import `METADATA_SPACE_ID` from our `SpaceId.ts` module. As mentioned before, when storing multiple data types, using a SpaceId helps us identify the index of the array so we can easily organize and recall the different data types since the Koinos Blockchain stores all data as bytes. See "More on SpaceIds" at the bottom of this page.


#### export statement

When instantiating a storage class, it is convient to inherit the subclass properties provided to us from the `Storage` class built into the `@koinos/sdk-as` module.

To do this, we extend the `Storage.Obj` sub-class to create 
`gamestats.metadata_object`. The usage is as follows:

```
export class MetadataStorage extends Storage.Obj<gamestats.metadata_object> {
  ...
}
```

#### constructing the storage

Finnaly, we can create our `MetadataStroage` class using a constructor function using the following arguements:

1. contractId 
2. META_SPACE_ID 
3. `decode` operation
4. `encode` operation

We need to use `decode` and `encode` because data is stored in binary form. `Storage.obj` gives us the decode and encode methods so we simply need to apply the method to the data.

__PRO TIP!__ As you develop on Koinos, you'll use this struture of storing state. We recommend you copy and modify this frame work.

Now that we have chased through how `gamestats.ts` manages storage space, we can go back to reviewing the remainder of the code starting with the initalize entrypoint.





## BUILD OUR GAMESTAT CONTRACT (PART 2: ENTRY POINTS)

### The initialize entrypoint

As stated in the `.proto` file, we must initalize the contract using the `initialize` entrypoint.  Here is the section of code we will be breaking down:


```
...
  initialize(args: gamestats.initialize_arguments): gamestats.empty_message {
    // only this contract can initialize itself
    System.requireAuthority(authority.authorization_type.contract_call, this._contractId);

    const metadata = this._metadataStorage.get()!;
    System.require(!metadata.initialized, 'already initialized');

    System.require(args.rewards_token_address.length, 'missing rewards_token_address argument');

    metadata.initialized = true;
    metadata.rewards_token_address = args.rewards_token_address;

    this._metadataStorage.put(metadata);

    return new gamestats.empty_message();
  }
```

Let's break this down.

#### System.requireAuthority & System.require

Koinos uses a highly customizeable authority structure. In our dApp, the authorized user of the `initalize` entry point is the contract itself and not an unauthorized user. We use `requireAuthority`, which is a subclass provided to us by the `System` module to perform this action.

The usage is as follows:

```
System.requireAuthority(authority.authorization_type.contract_call, this._contractId);
```

After we ensure that it is the contract itself calling the intialize entry point, we want to check if the contract has already perform the initalization to prevent it from being called more than once (WHY?). Remember that our initalize entrypoint is used to inject the wallet address of our reward token into `gamestats`.

To do this, we pull the `metadataStorage` object and check if it is empty using the `require` subclass provided to us by the `System` module.

If initalized, we respond with `already initalized`, else the transaction reverts.

If the `metadataStorage` object is empty, we perform a simple verification to see if there is an address of proper length. If this is the first time running intialize, then we expect a 0 length value and respond with `missing rewards_token_address argument`, otherwise the code reverts.

Finnaly, if the `metadataStorage` object is empty and the authorized user provides the `rewards_token_address`, then we set the `metadata.intialize` to true and store the address and return an empty message.


The usage is as follows:

```
const metadata = this._metadataStorage.get()!;
System.require(!metadata.initialized, 'already initialized');
System.require(args.rewards_token_address.length, 'missing rewards_token_address argument');
```

This is a very common way to initalize a contract that manages a token.

___PRO TIP!___ For more information on the System class, see https://koinos.github.io/koinos-sdk-as/modules/System.html


### The submit_game_stats entrypoint

The `submit_game_stats` entrypoint manages all of the game stats such as a leaderboards. Recall the architectural design phase of this dApp where we decided that the middleware will manage the game and submit the game stats. 

Four  obvious concepts to understand when reviewing this entry point are:

1. All new winners require new objects to store their address and wins
2. All previous winners already have this data stored on chain. 
3. Only the gamestat contract is authorized to mint and issue the reward token to the current game winner.
4. The gamestats are submitted by the middleware.

Here is the section of code we will be reviewing next:

```
  submit_game_stats(args: gamestats.submit_game_stats_arguments): gamestats.empty_message {
    const game_stats = args.game_stats;

    System.require(game_stats != null, 'missing "game_stats" argument');

    // get player object
    const playerObj = this._playersStorage.get(game_stats!.winner)!;

    // delete current leaderboard object for this player 
    // since the number of wins is going to change for that player
    let playerLeaderboardKey = new gamestats.leaderboard_key(playerObj.wins, game_stats!.winner);
    this._leaderboardStorage.remove(playerLeaderboardKey);

    // update players storage
    playerObj.wins = SafeMath.add(playerObj.wins, 1);
    this._playersStorage.put(game_stats!.winner, playerObj);

    // update leaderboard
    playerLeaderboardKey.wins = playerObj.wins;
    this._leaderboardStorage.put(playerLeaderboardKey, new gamestats.empty_message());

    // increment last game id
    const metadata = this._metadataStorage.get()!;
    metadata.last_game_id = SafeMath.add(metadata.last_game_id, 1);
    this._metadataStorage.put(metadata);

    // save game stats
    game_stats!.game_id = metadata.last_game_id;
    game_stats!.timestamp = System.getHeadInfo().head_block_time;
    this._gamesStatsStorage.put(
      new gamestats.game_stats_key(metadata.last_game_id),
      game_stats!
    );

    // mint token rewards
    const token = new Token(metadata.rewards_token_address);
    
    System.require(
      token.mint(game_stats!.winner, game_stats!.rewards),
      'failed to mint rewards'
    );

    return new gamestats.empty_message();
  }
```
Let's break this down.

#### System.require(game_stats)

In our `.proto` file, our `submit_game_stat` entrypoint requires an arguement called `game_stat`. If this arguement is not provided by the user, the code reverts. The usage is as follows:

```
const game_stats = args.game_stats;
System.require(game_stats != null, 'missing "game_stats" argument');
```
#### Managing the leaderboard, players storage and gameid

Next, we either create a new player object or grab an existing player object from  `_playersStorage`. Although we did not directly review `PlayersStorage.ts`, the logic within this file states that if the player's address does not exist in `Storage.map`, then the player is new and it must create a new object to store their first win. Otherwise if the player has won before, then their address would be stored  in the `.winner` filed that is defined within our `.proto` file. The usage is as follows:

```
const playerObj = this._playersStorage.get(game_stats!.winner)!;
```

Now that we have the `playerObj` handy, we create a new variable called `playerLeaderboardKey` to hold the gamestats of that player that we pulled from `_playersStorage`. Obviously if this is the player's first time winning, then `gamestats.leaderboard_key` will be 0. Eitherway, we remove this number so we can store their first or next win.  The usage is as follows:


```
let playerLeaderboardKey = new gamestats.leaderboard_key(playerObj.wins, game_stats!.winner);

this._leaderboardStorage.remove(playerLeaderboardKey);
```

Next,  we advance the player's win by a count 1 of using `SafeMath` and store that to `playerObj.wins` and update the leaderboard with this player's infromation. Lastly, we advance the `metadata.last_game_id` by 1 using `SafeMath`.

___PRO TIP!___Assembly Script can overflow and underflow when performing mathematical operations using certain types of number systems such as u64. When you are not certain of the maximum value that your function will reach, it is advisable to use `SafeMath` which is provided to us in the `@koinos/sdk-as` module. Beaware that `SafeMath` is requires more Mana than built in mathematical operations, so use it only when necessary.

The usage is as follows:

```
// update players storage
playerObj.wins = SafeMath.add(playerObj.wins, 1);
this._playersStorage.put(game_stats!.winner, playerObj);

// update leaderboard
playerLeaderboardKey.wins = playerObj.wins;
this._leaderboardStorage.put(playerLeaderboardKey, new gamestats.empty_message());

// increment last game id
const metadata = this._metadataStorage.get()!;
metadata.last_game_id = SafeMath.add(metadata.last_game_id, 1);
this._metadataStorage.put(metadata);
```


#### Save game stats

Next, we store the game_id (WHY? ALSO THIS PART HAS NEW COMPONENTS NOT IN THE WINDOW) and the timestamp which is the head block. 

The usage is as follows:

```
// save game stats
game_stats!.game_id = metadata.last_game_id;
game_stats!.timestamp = System.getHeadInfo().head_block_time;
this._gamesStatsStorage.put(
  new gamestats.game_stats_key(metadata.last_game_id),
  game_stats!
 );
```

#### mint the tokens

With a winner and the game_id stored on chain, we can safely mint the tokens. To do this, we instantiate a new object called `Token` and provide it with the token address as `rewards_token_address` that we injected in the initalization entrypoint. We then use `System.require` to call the mint function with the winner's address and the number of tokens, both of which are stored in the game_stats.

If the mint is not successful, then it provides an error message. 

The usage is as follows:

```
// mint token rewards
const token = new Token(metadata.rewards_token_address);
    
System.require(
    token.mint(game_stats!.winner, game_stats!.rewards),
    'failed to mint rewards'
  );
```

All aspects of the token, such as max supply, authorized minters are part of the token contract which is described in module 6.

## get_player_info entrypoint
Used by the front end to display certain types of information.

## get_leaderboard entrypoint
Used by the front end to display certain types of information.

## get_games_stats entrypoint
Used by the front end to display certain types of information.




# MORE INFORMATION

#### More On SpaceIds

SpaceIds are a convient way to serialize the data type in a table so we better organize what we store on chain. If we look inside our `SpaceIDs.ts` file, we can see that metadata is stored in table index 0, our gamestats data is stored in table index 1 and so on and so forth.
 If you have multiple types of data such as strings, integers, bytes, etc, then you should also create a file to manage the arrays that store this information. If we do not do this, then when we recall the information, its not possible to know what type the data is since the data is stored on chain as bytes.
```
export const METADATA_SPACE_ID = 0;
export const GAME_STATS_SPACE_ID = 1;
export const PLAYERS_SPACE_ID = 2;
export const LEADERBOARD_SPACE_ID = 3;
```