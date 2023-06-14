# Koinos Proof of Burn

The concept of burning tokens is not new to blockchain so there are many variations of Proof of Burn (PoB)  that exist on the internet. Koinos Group developed it's own variation that we will simply refer to as PoB.


## Operating Principal

The basic operating principal is as follows:

1. The node operator acquires and burns however much $KOIN they want.
2. The network returns Virtual Hash Power ($VHP), a fungible token, to the node operator. 
3. The node performs a fixed 300 hashes each second in an attempt to meet the block production critiera. If the criteria is met, the node produces a block and transmits it to the rest of the network. $VHP is burned in this process.
4. If the block is valid, the node operator recieves more $KOIN than the amount of $VHP burned and the cycle repeats. If the block is not valid, then it is orphaned and producer follows the state of the longest chain.

## What is the block production critiera?

In Proof-of-Burn, blocks are produced by hashing a private key, the random number output of a verifiable random function (VRF) and the current time (in milliseconds), then dividing by the number of $VHP held by the producer. This process is similar to Proof-of-Work, where the longest chain serves as an immutable record of transactions backed by the largest pool of sacrificed capital (burned $KOIN). It is however still far more energy efficient and comparable to Proof of Stake in energy consumption.

## Inflation

PoB rewards node operators through inflation of the Virtual Token Supply, which is defined as the sum quantity of all $KOIN and $VHP in existance. Inflation may be changed by a vote via on-chain governance. The inflation rate is currently set to 2% of the Virtual Supply. 

## Conclusion

Ultimately, PoB is a combination of principals found in PoW and PoS. Namely the randomness of PoW is combined with the requirement to be a token holder found in PoS. But the PoB node operator must also destroy the tokens to prove commitment much like a PoW node operator must commit capital to buy mining hardware. The burn component also allows token holders to manage inflation/deflation mechanics. 

Next, we will show how yield is calcuated.