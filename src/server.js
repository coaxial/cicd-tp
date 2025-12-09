const express = require("express");
const { getGreeting } = require("./greeting");

const app = express();
const PORT = process.env.PORT || 3000;

// Route simple pour GET /hello
app.get("/hello", (req, res) => {
  res.send(getGreeting());
});

// Route POST /hello qui accepte un paramètre de nom
app.post("/hello", (req, res) => {
  const name = req.body.name;
  res.send(getGreeting(name));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
