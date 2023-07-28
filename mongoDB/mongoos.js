const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATA_BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully!");
  })
  .catch((error) => {
    console.log(error);
  });
