# Calculating Block Rewards

To determine the block reward from inflation, we must know the Virtual Supply (sum of all $KOIN + $VHP). Lets assume the following conditions:

```
vhp.total-supply = 50,000,000

koin.total_supply = 50,000,000

Virtual Supply = 100,000,000
```

We must also know the several constants:

```
Average time to produce a block = 3 seconds

Inflation = 2%
```
With this information, we can calculate the block reward as follows:

**Step 1** 

Determine the total blocks in a year:

`(365 days x 24 hrs/day x 60 mins/hr x 60 sec/min) / (3 second blocks) = 10,512,000 Blocks/year`

**Step 2** 
Determine 2% of Virtual Supply:

`100,000,000 x 0.02 = 2,000,000`

_Bare in mind that the `2,000,000` value is only used to determine the current block reward! The virtual supply changes every block and the block reward is always adjusting._

**Step 3** 
Divide the inflation reward by the total blocks per a year to determine the instaneous block reward:

`2,000,000 / 10,512,000 = 0.1902587519 $KOIN/block`


The Virtual Supply now increases by 0.1902587519, and the calculation is done again for the next block with the updated Virtual Supply.


You may find the live statistics for `koin.total_supply` and `vhp.total_supply`:

[Koiner.app](https://koiner.app/tokens) or

[$KOIN Supply via KoinosBlocks](https://koinosblocks.com/address/15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL)
[$VHP Supply via KoinosBlock](https://koinosblocks.com/address/18tWNU7E4yuQzz7hMVpceb9ixmaWLVyQsr)

