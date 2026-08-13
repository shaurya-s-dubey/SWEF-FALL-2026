// A tiny REST API for a bookshelf.
//
// The two GET routes are DONE. You write POST, PUT and DELETE (see the TODOs).
// Run it with:  npm run dev     ->  http://localhost:3001

const express = require("express");

const app = express();
const PORT = 3001;

// This line lets us read JSON that Insomnia sends in the request body.
// Without it, req.body is undefined. Don't delete it.
app.use(express.json());

// Our "database" is just an array in memory.
// Restarting the server wipes any changes and puts these two books back.
let books = [
  { id: 1, title: "The Pragmatic Programmer", author: "Hunt & Thomas", read: true },
  { id: 2, title: "Clean Code", author: "Robert C. Martin", read: false },
];
let nextId = 3;

// ---------------------------------------------------------------------------
// DONE FOR YOU — read these two carefully, they are your template
// ---------------------------------------------------------------------------

// GET /books  ->  the whole list
app.get("/books", (req, res) => {
  res.json(books);
});

// GET /books/:id  ->  one book, or 404 if there is no such id
app.get("/books/:id", (req, res) => {
  // :id from the URL always arrives as a string, so convert it to a number
  const book = books.find((b) => b.id === Number(req.params.id));

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json(book);
});

// ---------------------------------------------------------------------------
// YOUR WORK STARTS HERE
// ---------------------------------------------------------------------------

// TODO 1 — POST /books  (create a book)
//   Read `title` and `author` from req.body.
//   If either is missing, respond 400 with { error: "..." }.
//   Otherwise build { id: nextId++, title, author, read: false },
//   push it onto `books`, and respond 201 with the new book.
app.post("/books", (req, res) => {
  res.status(501).json({ error: "POST /books is not implemented yet (TODO 1)" });
});

// TODO 2 — PUT /books/:id  (replace/update a book)
//   Find the book by id like the GET above does.
//   If it doesn't exist, respond 404.
//   Otherwise update its fields from req.body and respond 200 with the book.
app.put("/books/:id", (req, res) => {
  res.status(501).json({ error: "PUT /books/:id is not implemented yet (TODO 2)" });
});

// TODO 3 — DELETE /books/:id  (remove a book)
//   If no book has that id, respond 404.
//   Otherwise remove it from `books` and respond 200 with { deleted: <the book> }.
app.delete("/books/:id", (req, res) => {
  res.status(501).json({ error: "DELETE /books/:id is not implemented yet (TODO 3)" });
});

// ---------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Books API listening on http://localhost:${PORT}`);
});
