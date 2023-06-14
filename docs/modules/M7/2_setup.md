# SETTING UP AND USING STORAGE ON CHAIN

In this example, let's store some metadata. 

We'll begin by creating a file named `MetadataStorage.ts` in the `assembly/state` directory which will instantiate a database for us.

In many cases, there will be multiple databases needed that support multiple data types. To manage this complexity, we will also create a `StateId.ts` file in the same directory to id the tables within our database.  While this example has only 1 database with 1 table, you can identify as many tables you like within  `StateId.ts`.

## SAMPLE CODE

Here is an example of how to instantiate the code in our `MetadataStorage.ts` example:

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

Lets break this down.

#### import statements

The `Storage` class from the `@koinos/sdk-as` module gives us an easy way to interact with the data stored in the contract. 

In this example, we'll assume our database is being used by a file called `gamestats`, which defines the business logic of our smart contract. This import is, at a minimum intended to retrieve the `contractID` (aka the wallet address) from `gamestats`.

Lastly, we import the `METADATA_SPACE_ID` from `SpaceId.ts` (more on this below).


#### export statement

To instantiating a storage class, we inherit the subclass properties provided to us from the `Storage` class built into the `@koinos/sdk-as` module.

To do this, we extend the `Storage.Obj` sub-class to create 
`gamestats.metadata_object`. Storage has 3 sub-classess that may be of use to you, more information found here: https://koinos.github.io/koinos-sdk-as/modules/Storage.html

#### constructing the storage

Finnaly, we can create our `MetadataStroage` class using a constructor function. The Obj subclass has 4 required arguments (see the github link above).

1. contractId 
2. META_SPACE_ID 
3. `decode` operation
4. `encode` operation

We need to use `decode` and `encode` because data is stored on the Koinos blockchain in binary form. `Storage.obj` gives us the decode and encode methods so we simply need to apply the method to the data.

## More On SpaceIds

SpaceIds are a convient way to identify different tables within our database array. This helps us during data retrival because we can easily expect the type of data stored in each table. The `SpaceId.ts` file should have at a minimum the first line shown below, however you may use as many Space IDs as you neeed for your project. The numbered values represent the id of the storage space and can be any value you wish.


```
export const METADATA_SPACE_ID = 0;
export const YOURSTORAGE1_SPACE_ID = 1;
export const YOURSTORAGE2_SPACE_ID = 2;
export const YOURSTORAGE3_SPACE_ID = 3;
```

## Using our Database in our contract logic

With the storage space initalized, we'll need to import our storage class into the main file that contains our smart contract logic  using the following import statement:

```
import { MetadataStorage } from "./state/MetadataStorage";
```

## Conclusion

Thats it! You've successfully created a database on the blockchain so you can store whatever data is needed for your project. 