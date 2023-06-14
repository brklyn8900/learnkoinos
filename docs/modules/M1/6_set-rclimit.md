# RC Limit Settings

RC limits is covered in [Module 2: Mana & RC Limits](/M2/1_introduction.md) however we will briefly review how to set the RC limit in this chapter.

## Checking account_rc

If you have a wallet open, you can call the `account_rc` command which will provide a result similar to below:

```
🔓 > account_rc
889430480 rc
```

RC refers to resource credits, which is the backend term for Mana. This is detailed in [Module 2](/M2/1_introduction).

This particular account has 88940480 RC. If we check the `koin.balance_of` we will recieved the following:

```
🔓 > koin.balance_of
8.89430480 KOIN
```

The decimal places for `account_rc` are reported in whole intergers, while `koin.balance_of` uses floating numbers. In this case, the `account_rc` equals `koin.balance_of` which means that the 100% of the account's Mana is avaialble for use.

## Setting rclimit

Koinos-CLI allows you to set how much `rc` can be consumed by any given transaction using the `rclimit` command. For example, if we want to set the `rclimit` to 10% of our total Mana, we use the following command with the following response:

```
🔓 > rclimit 10%
Set rc limit to 10%
```
If we want to view the current `rclimit` we use the following command with the following response:

```🔓 > rclimit
Current rc limit: 10% (0.9)
```

If the `rclimit` is less than the required Mana to complete a transaction, raise your `rclimit` accordingly.