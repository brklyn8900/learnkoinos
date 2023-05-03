# RESOURCE CREDIT (RC) LIMITS

On the backend, Mana is managed by a `Resource Credit` system. Developers need to manage these limits in their dApps to ensure a smooth user experience.

There are two basic terminologies that must be understood.

Resource Credit: The available amount of Mana. 1 RC = 1 Mana.

RC Limit: The relative amount of Mana that can be spent for any given transaction, expressed in percentage.


Since the Mana cost of a transaction is managed by an AMM that acts in real time, we cannot predict the exact amount of Mana required, however we can be reasonable close, which is why we must set an `RC Limit` which intuitively, puts an upper bound to how much Mana can be consumed in any given transaction.


## Example:

If `Account 0` has `250 KOIN` then it will also have `250 Mana`.

For any given transaction, if the sender specifies `rclimit = 100%`, then the transaction can consume up to `250 Mana`. 

If the sender specifics `rclimit = 1%` then the transaction can consume up to `2.5 Mana`.

## Developer Gotcha!

If a sender specifies `rclimit = 100%` and tries to complete 2 consecutive transaction without waiting for their Mana to recharge back to 100%, then the second transaction would not have access to 100% of the resource credits and fail!

___Protip: `rclimit` should be set to the lowest value that the transaction is expected to consume. If you expect it to consume 0.75 Mana, then set the `rclimit` in `Koinos-CLI`, `Kondor` or `KoinosBlocks` (whichever interface you are using) value equal to a percentage that is slightly above 0.75 Mana.___

- For a wallet with 100 $KOIN, use `rclimit = 1%` to allow 1 Mana to be consumed.

- For a wallet with 300 $KOIN, use `rclimit = 0.33%` to allow 1 Mana to be consumed.