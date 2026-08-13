# Activity: Books API — POST (~25 minutes)

The two **GET**s already work. You write **`POST /books`** and send it from Insomnia.

`PUT` and `DELETE` are homework.

---

## Goal

1. Server at `http://localhost:3001`
2. `GET /books` works in Insomnia
3. **`POST /books` written by you** — `201`, then a `GET` shows the new book

---

## 1. Start the server (~3 min)

Pre-work should already have run `npm install`. From the repo:

```bash
cd 04-api/activity/starter
npm run dev
```

You should see: `Books API listening on http://localhost:3001`

Leave that terminal running. Open `server.js`.

- `GET /books` and `GET /books/:id` — **done** (your template)
- `POST /books` — **today**
- `PUT` / `DELETE` — **homework**

---

## 2. Hit the GETs in Insomnia (~5 min)

New HTTP request:

- Method **GET**, URL `http://localhost:3001/books` → **Send**
- Expect `200` and two books
- Try `/books/1` and `/books/99` (`404`)
- Try **POST** `/books` now — you should get `501` until you write it

Connection error? Server not running, wrong port, or `https` instead of `http`.

---

## 3. Implement `POST /books` (~15 min)

Replace the `501` in `app.post("/books", ...)`.

**Behavior:**

1. Read `title` and `author` from `req.body`
2. Missing either → `400` with `{ error: "title and author are required" }`
3. Else `{ id: nextId++, title, author, read: false }`, `push` onto `books`
4. Respond **`201`** with the new book

### Reference (fill in the gaps — not a finished solution)

```js
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  // if missing title or author → return 400

  // const book = { id: nextId++, title, author, read: false };
  // books.push(book);
  // res.status(201).json(book);
});
```

Copy the `return res.status(...).json(...)` pattern from `GET /books/:id`.

### Send it

1. Method **POST**, URL `http://localhost:3001/books`
2. **Body** tab → **JSON**:

```json
{
  "title": "Designing Data-Intensive Applications",
  "author": "Martin Kleppmann"
}
```

3. **Send** → `201` and a book **with an `id`**
4. **GET** `/books` again → three books
5. **POST** with `{}` → `400`

If `req.body` is empty: Body type is not **JSON**. Switch it and resend.

`POST` goes to `/books` (the collection), not `/books/:id` — the new book has no id yet.

---

## Done when

- [ ] `GET /books` works
- [ ] `POST /books` returns `201` and shows up on a later GET
- [ ] You can say why POST hits `/books`

Homework: same file — `PUT` and `DELETE`.
