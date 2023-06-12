# Step 3: Sync the Node


## Mac and Linux
From the base directory of `~./koinos`, start the syncing process with the following command:

```
docker compose --profile all up -d
```

This will begin the download process for all microservices and run them in dameon mode. You will be returned to command prompt when using the flag `-d`. Note, you do not need to run all of the microservices if you do not want to. Many of them are unnecessary for an at home mining node and you may setup various profiles in your .env file to manage this. When running under dameon mode, you can close your terminal and the node will continue to sync in the background. If you arent sure if the node is still running, use the following command to see if the docker container is still up

```
docker ps -a
```


Syncing the node will take several days depending on the speed of your internet connection and machine. To see the current status, you can check the chain log's last 500 lines by entering the following command:
```
docker logs koinos-chain-1 -n 500
```

Once the node is sync'd, shut down the node using the following command:
```
docker compose --profile all down
```
If you are not sure if your node is sync'd or not, just check the `koinos-chain-1` log and see if it matches the latest block found at [Koinos Blocks](http://koinosblocks.com).



## Windows
Open up windows `PowerShell` and navigate to your base directory using the following command:

```
cd C:\koinos-2.0.0
```
Next, begin the syncing process with the following command:
```
docker compose --profile all up -d
```
This will begin the download process for all microservices and run them in dameon mode. You will be returned to command prompt when using the flag `-d`. Note, you do not need to run all of the microservices if you do not want to. Many of them are unnecessary for a at home mining node and you may setup various profiles in your .env file to manage this. 

__Note: You cannot close powershell when syncing! It will close all operations!__

Syncing the node may take several days depending on the speed of your internet connection and machine. To see the current status, you can check the chain log's last 500 lines by entering the following command:
```
docker logs koinos-chain-1 -n 500
```

Once the node is sync'd, shut down the node using the following command:
```
docker compose --profile all down
```
If you are not sure if your node is sync'd or not, just check the `koinos-chain-1` log and see if it matches the latest block found at [Koinos Blocks](http://koinosblocks.com).


___Note: For Windows users depending on your docker version, `docker compose` may not work. Instead, try `docker-compose`___
