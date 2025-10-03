const express = require("express");
const serverless = require("serverless-http");

const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel 🚀");
});

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
