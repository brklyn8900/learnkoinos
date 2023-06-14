# Calcuate Mining Yield

Many of the steps are similar to calculating the block reward. Let's perform this calculation using the live values as of this writing.

**Step 1**

Grab the $KOIN and $VHP `tota_supply` from Koinos Blocks, see previous section for links. These values are shown as integers but must be converted to floating point numbers of 8 decimal places, to do this, divide by 10^8. At the time of this writing the supply is as follows:

`10,589,924.64498886 $KOIN.`

`7,963,448.62694314 $VHP.`

`Virtual Supply = 18,553,373.271932 `


**Step 2**

Calculate the total blocks per year, same as shown in calculating Block Rewards.

`10,512,000 blocks/year`

**Step 3**

Calculate the `instantaneous total reward` available by multiplying the inflation rate (2%) and the vSupply using the inflation constant of 2%.

`18,553,373.271932 x 0.02 = 371,067.46543864 $KOIN`

**Step 4**

Dividing the `instantaneous total reward` by the total supply of $VHP to find the theoretical yield and convert it to a percentage.

`371,067.46543864 $KOIN / 7,963,448.62694314 $VHP x 100 = 4.6596328 %`

This number assumes that ALL VHP burned is actively producing, hence it is a theoretical yield. Some $VHP may be held in a liquidity pool, or not actively participating in mining because the node is not powered on.The actual yield will therefore vary from this theoretical number.
