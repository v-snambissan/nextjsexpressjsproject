const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Correct route with dynamic parameter
  server.get("/api/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: `Hello, your ID is ${id}` });
  });

  // Catch-all route for Next.js pages
  server.get('/api/:id', (req, res) => {
    const { id } = req.params;  // Retrieve the value of the 'id' parameter
    res.json({ message: `Hello, ID is ${id}` });
  });
  

  // Start the Express server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
