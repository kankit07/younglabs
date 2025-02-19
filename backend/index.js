const express = require("express");
const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: ["https://younglabs.vercel.app/", "http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

const PORT = process.env.PORT || 5001;

/**
 * GET /api/greet
 * Expects a query parameter 'name'
 * Returns a greeting message or an error if name is missing.
 */
app.get("/api/greet", (req, res) => {
  const name = req.query.name;

  // Check if name is provided
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }

  // Return the greeting message
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
