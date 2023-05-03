# Calculating Block Rewards

___!!! Common Misconception: There is no pool of $KOIN used to pay block producers! The block producer's reward is created and distributed at each block.___


To determine the block reward from inflation, let's look at a arbitrary block with following conditions:
```
vhp.total-supply = 50,000,000

koin.total_supply = 50,000,000

Virtual Supply = 100,000,000
```

_Bare in mind, that these values are hypothetical, you may replace these numbers with the current token supplies of $VHP and $KOIN to calculate the current yield._

We will also need several constants:
```
Average time to produce a block = 3 seconds

Inflation = 2% (of Virtual Supply)
```
### The block reward is calculated as follows:

Determine the total blocks in a year:

`(365 days x 24 hrs/day x 60 mins/hr x 60 sec/min) / (3 second blocks) = 10,512,000 Blocks/year`

Determine 2% of Virtual Supply:

`100,000,000 x 0.02 = 2,000,000`

_Bare in mind that the `2,000,000` value is only used to determine the current block reward! The virtual supply changes every block and the block reward is always adjusting._

Divide the inflation reward by the total blocks per a year to determine the instaneous block reward:

`2,000,000 / 10,512,000 = 0.1902587519 $KOIN/block`


The Virtual Supply now increases by 0.1902587519, and the calculation is done again for the next block with the new Virtual Supply.


You may find the live statistics for `koin.total_supply` and `vhp.total_supply` at [Koiner.app](https://koiner.app/tokens).