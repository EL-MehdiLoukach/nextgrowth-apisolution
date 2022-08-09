# NextGrowth Backend Exercise solution - Node.JS

This is a description of the content, tools and functions used in the API.

## Available Scripts :

In order to run the API locally, clone the repository, install the dependencies in the project directory by running the following command :

### `npm install && npm start`

This command will run the API locally on the port : 3000

## API Authorization :

In order to use the API's endpoints, an API KEY is required in the HTTP request to consume the API, you can find a `confing.env` file that contains the key in the config folder.

## Test the API with postman :

In the project root directory, you can find the JSON file : `nextgrowth.postman_collection.json`, which is a collection of pre-built requests for postman software, import the file into postman to save time creating the requests.

## You may want to browse the database to recover docments IDs to put them on POSTMAN requests.

## MongoDB database :

This API works with an online database deployed on the cloud through atlas platform, free version on AWS, Credentials to connect to the database can be found in the `config.env` file. Otherwise, it can be connected to a local docker container.

