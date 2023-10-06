## Run the application

To run the application you need to have Docker and npm installed on your machin, then run the following commad:

```
npm run start:docker
```

The app will start on port: `5180` on a docker container in your host.

At this point you need back-end system to talk to actual Rawg api and return the process data. You can use game-hub backend from following address

```
git clonet https://github.com/adamsadeghi1/game-hub-back-nestJs.git
```

Running back-end is exactly the same as running front-end (by runnign ```npm run start:docker``` it will start on port ```3001```). Just you need to create an API key in Rawg portal.
1- go to following address:
```
https://rawg.io/login?forward=developer
```
2- create a user and get your API Key it would take less than a minute.

3- In your back-end project folder open ```.env.example``` file and change the value of ```RAWG_API_KEY``` with the actual value you get from Rawg website.

4- **Important!!** change the name of ```.env.example``` file to ```.env``` and done!!!.
start the bach-end app with ```npm run start:docker```.

## Note

If you encounter a permission error while runnig the app, run the following command in the root of application:

```
chmod +x ./start-app.sh
```
