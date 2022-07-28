const mongoose = require("mongoose");
require('dotenv').config()
const logger = require('../utils/logger')

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
        process.env.DB_URL,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    )
    .then(() => {
      // console.log("Successfully connected to MongoDB Atlas!");
      logger.info("Successfully connected to MongoDB Atlas!")

    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
      logger.error("Unable to connect to MongoDB Atlas!")
      logger.error(error)
    });
}

module.exports = dbConnect;