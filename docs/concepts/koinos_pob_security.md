# Security of PoB

Proof of Burn blends the security benefits of PoW and PoS. Let's look at each the primative (the most basic level) security features of each and compare the them to the primative security of PoB.

# PoW Security Primatives (Bitcoin style)

- Blocks are produced at random (~10minutes)
- Producers must purchase higher powered equipment to increase the probability of producing blocks.
- If global hash power increases, difficulty to mine increases proportionally to maintain 10 minute block times.
- Trades electrical power for increased security from external attacks.
- Requires hash wars to prevent 51% attacks.



# PoS Security Primatives (ETH Style)

- Blocks are produced at specific intervals determined by the network (12 seconds fixed).
- The Producer (aka Validator) is known prior to the start of an interval.
- Block producers must purchase and stake $ETH to produce blocks.
- To exit block production, $ETH must be unstaked which may take several days.
- Producers must stake more tokens to produce more blocks.
- A validator comittee votes on the validity of the producer's block.
- Requires slashing to prevent 51% attacks.

# Proof of Burn (Koinos Style)

- Blocks are produced at random (~3 seconds).
- The producer must purchase and burn $KOIN to receive $VHP to be eligible to produce blocks.
- Increasing $VHP by burning more $KOIN increases the probability of producing a block.
- If global $VHP tokens increase, the virtual difficulty increases.
- To exit block production, producers must complete a full block production cycle that last 365 days on average.
- Requires burning to prevent 51% attacks.



### Lets compare these security primatives between PoW, PoS and PoB. 


## Accessibility
One core primative taken from PoS is the accessibility of becoming a producer. PoS & PoB require tokens to begin which are universally priced and available on exchanges unlike PoW which have ever increasing cost and wait times to access new miners.

## 51% Attacks 
Another core primative taken from PoW is the increase of hash power to prevent 51% attacks. PoB uses "virtual hash power", which is represented by the quantity of $VHP tokens held by a node. If a 51% attack occurs, it can be negated by honest producers burning more $KOIN to increase the amount of global $VHP. This would result in a global burn war which traps the attacker into producing valid blocks.

## Decentralization
PoW often suffers from hardware centralization, which occurs when professional miners have an outsized advantage with access to cheap or free power and a large number of high performance. This makes it difficult for hobbyist to compete however, due to pools, group effects have allowed hobbyist to virtually band their hardware together to produce blocks. The benefit to this is that hobbyist maintain posession of their hardware.

ETH-PoS requires 32 ETH to be staked, but access is greatly increased through mining pools. The result is that mining pools dominate the market for hobbyist. While the ETH token is generally well distributed, the 32 ETH minimum forces hobbyist to consolidate their tokens into pools forcing only a few pools to dominate the market.

PoB again blends the advantages of both. There is no minimum to participate in block production which greatly increases the ability to for hobbyist to access mining while maintain posession of their tokens. Further, mining pools are easy to launch and allow a healthy competition for token holders to partiipate in block production without running their own nodes.


