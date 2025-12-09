const express = require("express");
const { getGreeting } = require("./greeting");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser les corps JSON
app.use(express.json());

/**
 * @route GET /hello/:name?
 * @param {string} name - Nom à saluer (optionnel)
 * @returns {string} Message de salutation
 */
app.get("/hello/:name?", (req, res) => {
  const name = req.params.name || "stranger";
  
  if (/\d/.test(name)) {
    return res.status(400).json({ 
      error: "Name should not contain numbers" 
    });
  }

  res.status(200).send(getGreeting(name));
});

/**
 * @route POST /hello
 * @headers x-name
 * @body {object} - Peut contenir un nom dans le corps JSON (optionnel)
 * @returns {string} Message de salutation
 */
app.post("/hello", (req, res) => {
  // Priorité au corps de requête puis à l'en-tête
  const name = req.body.name || req.headers["x-name"] || "stranger";

  if (/\d/.test(name)) {
    return res.status(400).json({ 
      error: "Name should not contain numbers" 
    });
  }

  res.status(200).send(getGreeting(name));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
