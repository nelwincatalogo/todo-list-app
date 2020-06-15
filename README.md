# TO-DO List App

I was able to learn and build this MERN TODO List App within 4 days.

## Local Setup

### Setup Backend

1. Open a terminal and run this command.
   
   ```bash
    cd backend && npm install
   ```

2. Install nodemon to run our node server.
   
   ```bash
   npm i -g nodemon
   ```
3. Start the MongoDB Services.
   
   ```bash
    mongod
   ```
4. Open new terminal and Connect to mongodb client.
   
    ```bash
    mongo
    ```
5. Create a database.

    ```bash
    use todos-mongodb
    ```
6. Create a collection.

    ```bash
    db.createCollection("todos")
    ```
7. Start the nodejs server by running
   
    ```bash
    npm start
    ```

### Setup Frontend

1. Install the frontend dependencies.

    ```bash
    npm install
    ```
2. Start the project.

    ```bash
    npm start
    ```