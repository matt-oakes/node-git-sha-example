const express = require("express");

const app = express();

const gitCommit = process.env.CAPROVER_GIT_COMMIT_SHA || "unknown";

app.get("/", (_req, res) => {
  res.send(`Hello there! Deployed from ${gitCommit}`);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Deployed from git commit ${gitCommit}`);
  console.log(`Listening on port ${port}`);
});
