# Activity: Books API (~60 minutes)

The two **GET**s already work. You implement **`POST`**, **`PUT`**, and **`DELETE`**, and prove each one in Insomnia.

Pre was the lecture. Today is build + a short review at the start of class.

---

## Goal

1. Server at `http://localhost:3001`
2. `GET /books` works in Insomnia
3. **`POST /books`**, **`PUT /books/:id`**, **`DELETE /books/:id`** written by you and tested

---

## Timeline

| Time | What |
| --- | --- |
| 0–8 min | `npm run dev`, GET list / one / missing id |
| 8–28 min | `POST /books` + test (including `400`) |
| 28–45 min | `PUT /books/:id` + test |
| 45–60 min | `DELETE /books/:id` + a couple of bad requests |

Do them **in order**. Test each in Insomnia before starting the next.

---

## 1. Start the server

Pre-work should already have run `npm install`.

```bash
cd 04-api/activity/starter
npm run dev
```

You should see: `Books API listening on http://localhost:3001`

Leave that terminal running. Open `server.js`.

- `GET /books` and `GET /books/:id` — **done** (template)
- `POST`, `PUT`, `DELETE` — **you**, today

---

## 2. Insomnia: the GETs

New HTTP request (Scratch Pad is fine):

- **GET** `http://localhost:3001/books` → **Send** → `200`, two books
- `GET /books/1` → one book
- `GET /books/99` → `404`
- **POST** `/books` before you write it → `501`

Connection error? Server down, wrong port, or `https` instead of `http`.

Reminders: method dropdown, URL, **Body → JSON** for POST/PUT, response pane = status + JSON.

---

## 3. `POST /books` (create)

Replace the `501` in `app.post("/books", ...)`.

**Behavior:**

1. Read `title` and `author` from `req.body`
2. Missing either → `400` with `{ error: "title and author are required" }`
3. Else `{ id: nextId++, title, author, read: false }`, `push` onto `books`
4. Respond **`201`** with the new book

### Reference (gaps on purpose)

```js
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  // if missing title or author → return 400

  // const book = { id: nextId++, title, author, read: false };
  // books.push(book);
  // res.status(201).json(book);
});
```

Use `return res.status(...).json(...)` like `GET /books/:id`.

**Insomnia:** **POST** `http://localhost:3001/books`, Body → **JSON**:

```json
{
  "title": "Designing Data-Intensive Applications",
  "author": "Martin Kleppmann"
}
```

Expect `201` and an `id`. **GET** `/books` → three books. POST `{}` → `400`.

If `req.body` is empty, Body type is not JSON.

`POST` hits `/books` (collection), not `/books/:id`.

---

## 4. `PUT /books/:id` (update)

Replace the `501` in `app.put(...)`.

**Behavior:**

1. Find with `Number(req.params.id)` — same idea as GET one
2. Missing → `404` `{ error: "Book not found" }`
3. Found → copy fields from `req.body` (e.g. `Object.assign(book, req.body)`), respond **`200`** with the book

**Hint:** `book` is the object already sitting in the `books` array. Mutating it is enough; you do not re-insert.

**Insomnia:** **PUT** `http://localhost:3001/books/2`, Body → JSON:

```json
{ "title": "Clean Code", "author": "Robert C. Martin", "read": true }
```

Expect `200` and `"read": true`. Confirm `GET /books/2`. Then `PUT /books/99` → `404`.

---

## 5. `DELETE /books/:id` (remove)

Replace the `501` in `app.delete(...)`.

**Behavior:**

1. `books.findIndex((b) => b.id === Number(req.params.id))`
2. `-1` → `404`
3. Else `books.splice(index, 1)`, respond **`200`** with `{ deleted: <that book> }`

**Insomnia:** **DELETE** `http://localhost:3001/books/1` (no body) → `200`. GET list — book 1 gone. Delete the same id again → `404`.

---

## Done when

- [ ] GET list and GET one work
- [ ] POST returns `201` and shows up on a later GET
- [ ] PUT changes a book (`200`) and missing id is `404`
- [ ] DELETE removes a book (`200`) and missing id is `404`
- [ ] You can explain why POST uses `/books` but PUT/DELETE use `/books/:id`

Restart the server once if you have time: the two seed books come back. That’s “in memory.”

Homework is **not** more Books routes. After wrap-up, research OpenAI Chat Completions and implement [../hw/README.md](../hw/README.md).
