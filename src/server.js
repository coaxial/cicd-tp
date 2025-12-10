const express = require("express");
const { getGreeting } = require("./greeting");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  const name = req.query.name;
  res.status(200).send(getGreeting(name));
});

app.all("/hello", (req, res) => {
  res.sendStatus(405);
});

app.use((req, res) => {
  res.sendStatus(404);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
