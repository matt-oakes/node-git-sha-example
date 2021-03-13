const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello there!");
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
