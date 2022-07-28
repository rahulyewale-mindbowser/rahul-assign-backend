const express = require("express");
const app = express();
const cors = require("cors");

const stripe = require("./routes/stripe");
const morgan = require("./middlewares/morgan");
require("dotenv").config();
const port = process.env.PORT || 8080;
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const dbConnect = require("./models/dbConnect");
// execute database connection
dbConnect();

app.use(morgan);
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/stripe", stripe);

app.listen(port, () => {
  console.log(`app started at port ${port}`);
});
