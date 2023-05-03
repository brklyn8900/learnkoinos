

# Step 3: Sync the Node

From the Koinos directory, start syncing the node by typing

```
docker compose --profile all up -d
```
This will begin the download process for all microservices and run them in dameon mode. You will be returned to command prompt when using the flag `-d`. Note, you do not need to run all of the microservices if you do not want to. Many of them are unnecessary for a at home mining node and you may setup various profiles in your .env file to manage this.

Syncing the node may take several hours or days depending on the speed of your internet connection and machine. To see the current status, you can check the chain log by entering the following command:
```
docker logs koinos-chain-1
```
To exit the log, press `ctrl+c`.

Once the node is sync'd, shut down the node using the following command:
```
docker compose --profile all down
```
If you are not sure if your node is sync'd or not, just check the `koinos-chain-1` log and see if it matches the latest block found at [Koinos Blocks](http://koinosblocks.com).

