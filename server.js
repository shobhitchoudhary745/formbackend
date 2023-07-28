const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./mongoDB/mongoos");
const formRouter = require("./routes/form");

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(formRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
