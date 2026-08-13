// A tiny REST API for a bookshelf.
//
// Class:    implement POST /books
// Homework: implement PUT /books/:id and DELETE /books/:id
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
// CLASS — POST /books (create)
//   See activity/BOOKS_API.md for the reference shape + Insomnia steps.
// ---------------------------------------------------------------------------

app.post("/books", (req, res) => {
  // TODO (class): read title/author from req.body
  // TODO (class): 400 if either is missing
  // TODO (class): create book with nextId++, push, respond 201
  res.status(501).json({ error: "POST /books not implemented yet" });
});

// ---------------------------------------------------------------------------
// HOMEWORK — PUT + DELETE
//   See hw/README.md
// ---------------------------------------------------------------------------

app.put("/books/:id", (req, res) => {
  // TODO (homework): find book by id; 404 if missing
  // TODO (homework): update fields from req.body; respond 200 with the book
  res.status(501).json({ error: "PUT /books/:id not implemented yet (homework)" });
});

app.delete("/books/:id", (req, res) => {
  // TODO (homework): find index by id; 404 if missing
  // TODO (homework): splice it out; respond 200 with { deleted: book }
  res.status(501).json({ error: "DELETE /books/:id not implemented yet (homework)" });
});

app.listen(PORT, () => {
  console.log(`Books API listening on http://localhost:${PORT}`);
});
