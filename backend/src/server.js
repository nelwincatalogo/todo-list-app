const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const todoRoutes = require("./routes/todo.routes");
app.use("/todos", todoRoutes);

// MongoDB Connection
const dbConfig = "mongodb://127.0.0.1:27017";
const dbName = "todos-mongodb";

mongoose.connect(`${dbConfig}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");

  app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
  });
});
