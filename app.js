if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(4500, () => {
  console.log("app is now running");
});
