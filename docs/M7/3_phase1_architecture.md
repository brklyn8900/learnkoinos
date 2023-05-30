# ARCHITECTING THE USER EXPERINCE

The main focus of the architectural phase is to develop the user experience (UX) and loosely define how the supporting back end (middleware and smart contracts) functions. Remember that we do not need to discuss implementation details, but we must be able to define the user experience sufficent enough to develop tasks and assign work responsibilities.

The entire team should be a part of this phase because everyone can provide feedback from their respective ends. Some ideas might be great but remember that you can always come back and iterate and add features during future development.


## THE UX BEHIND FACT OR FICTION

While the user experience for our  "Fact or Fiction" game will differ from your idea, we've provided the general UX that we develped during our architectural phase to help you understand how simple we kept it. You should aim to be able to explain your UX in just a few simple steps too. 

1. Players enter the website and see a countdown timer to the game start. 
2. If they wish to play, they connect their wallet. No $KOIN necessary to play or recieve rewards.
3. At the start of the game, they'll see how many players are remaining, the question, 2 buttons stating "fact" or "fiction", and how much time left to answer.
4. After several rounds, the remaining player is the winner and automatically receives the in-game reward token.

Our written UX is then translated to a spiderweb using excalidraw.

![UX structure](/M7/images/web.png "UX structure")


Once the front end UX is generally understood, we can begin to discuss a critical decision process. What data lives on chain vs off chain? 

## KEEPING DATA ON CHAIN VS OFF CHAIN 

Resources are much more available on Web 2 than on Web 3, so if this is your first time building on blockchain, it might be easier to just throw everything on chain however, you will often find that doing so makes your dApp inefficient and resource dependent. 

Consider the following two part question: 
__"Do you need to recall data in the future?"__ If so,
__"is it critical to your dApps unique value?"__

For the Fact or Fiction game, it was possible to store all types of information on chain, including the questions, score keeping, and all types of metrics however none of these data points improve the UX that we previously described. For that reason, we decide that we would only store the winner's address on chain so we can highlight how data is stored and recovered on chain. In the future, we may use this data to create a historical leaderboard.

## FRONT END DESIGN

Since the UX is established, it should be easy to build the front end based on the UX. Avoid the pitfall of focusing on the aesthics. Trust us, the users don't care as much as you think. Instead, focus on an easy experience for the user so they can quickly understand how to navigate your MVP. If you find time at the end of the building stage, you can go back and apply some aesthics.  This module will provide several drop-in components that will help speed up your front end design.

Our developers were familiar with React, so that's the framework we chose to implement. There are many frameworks you can choose from so use what suits your team.

Our front end interacts with our gameserver (the middleware) which is connected to the blockchain via a RPC end point provided by koinos.io (https://api.koinos.io)

## MIDDLEWARE DESIGN

Each dApp will have a different middleware requirement. BurnKoin for example, is entirely powered by the blockchain and contains no middleware. Instead, all information is pulled directly from the blockchain. Some dApps might choose to use a severless design and rely on services such as firebase or supabase for all their application needs.

For Fact or Fiction, we decided on a severless design to get our MVP shipped as quickly as possible so we will be using supabase to coordinate the frontend with the smart contracts. 

## SMART CONTRACT DESIGN

Since we previously decided to only store the game winner, we opted for two smart contracts.

__The Game State Contract__

This contract is used to store the winning player's address on chain to be recovered in the future. It will recieve data from supabase at the end of the game. Storing the game winner allows us to create a future leaderboard but more importantly, it will demonstrate how to store and recall chain state.

__The Game Reward Token Contract__

This contract initalizes the game reward token and recieves mint commands from supabase once the game is completed. The token contract will mint and issue the reward to the address stored in the game state contract.


## NEXT STEPS

The next step is to begin the build phase. By now, you should have a developed a basic idea that was sufficent to build a team upon. Together, the team should have developed the idea by working backwards with the user outcome to create the user experience. With the UX, the development team should be aware of their work responsibilities and tasks.