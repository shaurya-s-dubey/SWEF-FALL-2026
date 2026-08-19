// Tiny OpenAI wrapper. You implement POST /ask.
// Run: npm run dev  ->  http://localhost:3002
// Put your key in .env (see .env.example). Never commit .env.

require("dotenv").config();
const express = require("express");

const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, try: "POST /ask with { prompt: \"...\" }" });
});

// TODO: POST /ask — see hw/README.md
//   Read prompt; 400 if missing; fetch OpenAI; res.json({ reply: ... })
app.post("/ask", async (req, res) => {
  res.status(501).json({ error: "POST /ask not implemented yet" });
});

app.listen(PORT, () => {
  console.log(`OpenAI wrapper listening on http://localhost:${PORT}`);
});
