// A tiny REST API for a bookshelf.
//
// Class: implement POST /books, PUT /books/:id, DELETE /books/:id
// Homework is a separate OpenAI wrapper in 04-api/hw/
//
// Run:  npm run dev  ->  http://localhost:3001

const express = require("express");

const app = express();
const PORT = 3001;

// Lets Express read JSON bodies from Insomnia (POST / PUT).
// Without this, req.body is undefined.
app.use(express.json());

// In-memory "database". Restarting the server resets to these two books.
let books = [
  { id: 1, title: "The Pragmatic Programmer", author: "Hunt & Thomas", read: true },
  { id: 2, title: "Clean Code", author: "Robert C. Martin", read: false },
];
let nextId = 3;

// ---------------------------------------------------------------------------
// DONE — use these as your template
// ---------------------------------------------------------------------------

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json(book);
});

// ---------------------------------------------------------------------------
// CLASS — POST, PUT, DELETE (see activity/BOOKS_API.md)
// ---------------------------------------------------------------------------

app.post("/books", (req, res) => {
  // TODO: title/author from req.body; 400 if missing; push; 201
  res.status(501).json({ error: "POST /books not implemented yet" });
});

app.put("/books/:id", (req, res) => {
  // TODO: find by id; 404 if missing; update from req.body; 200
  res.status(501).json({ error: "PUT /books/:id not implemented yet" });
});

app.delete("/books/:id", (req, res) => {
  // TODO: findIndex by id; 404 if missing; splice; 200 { deleted }
  res.status(501).json({ error: "DELETE /books/:id not implemented yet" });
});

app.listen(PORT, () => {
  console.log(`Books API listening on http://localhost:${PORT}`);
});
