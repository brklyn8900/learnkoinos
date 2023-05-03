
# STEP 2: Set up the environment

### config file setup
Inside your koinos directory, is a file called `config-example`.  Make a copy of this file and rename it to `config` using the following command:
```
cp -r config-example config
```

You will now need to edit the config file using your preferred editor, which can be as simple as `notepad` for windows, `nano` for mac or linux. For this example, we'll be using `nano` editor. To edit the config file for mac or linux, use the following command:
```
nano config
```
This will open the nano editor and allow you to edit several fields. Find the following field and remove the `#`
```
#producer
```
to
```
producer
```
&
```
#private-key-file:private.key
```
to
```
private-key-file:private.key
```

### .env file setup
Also inside your koinos directory, is a file called `env.example`.  Make a copy of this file and rename it to `.env` using the following command:

```
cp env.example env
```
If you are using mac or linux, you do not need to change this directory if you do not wish to. The `.env` file will automatically use your home folder to create the node directory located at `~/.koinos`.

If you are using windows ONLY, you'll need to edit the .env file using your preferred editor to change
```
BASEDIR=~./koinos
```
to
```
BASEDIR=c:\koinos-node
```
This will use c:\koinos-node folder to contain all of your mining node files. You do not need to use `koinos-node` and may name it anything you like. 
