# Homework 4: Finish the Books API

**Objective:** Same Express server from class. Implement **update** and **delete**, and hit them in Insomnia.

Class notes: [../activity/BOOKS_API.md](../activity/BOOKS_API.md).

---

## Setup

`POST /books` should already work. Same folder:

```bash
cd 04-api/activity/starter
npm run dev
```

---

## Part 1: `PUT /books/:id`

Replace the `501` in `app.put(...)`.

1. Find by `Number(req.params.id)` (same idea as `GET /books/:id`)
2. Missing → `404` with `{ error: "Book not found" }`
3. Found → copy fields from `req.body` (e.g. `Object.assign(book, req.body)`), respond **`200`** with the book

Insomnia: **PUT** `http://localhost:3001/books/2`, Body → JSON:

```json
{ "title": "Clean Code", "author": "Robert C. Martin", "read": true }
```

Expect `200` and `"read": true`. Confirm with `GET /books/2`. Then `PUT /books/99` → `404`.

---

## Part 2: `DELETE /books/:id`

Replace the `501` in `app.delete(...)`.

1. `books.findIndex((b) => b.id === Number(req.params.id))`
2. `-1` → `404`
3. Else `books.splice(index, 1)`, respond **`200`** with `{ deleted: <that book> }`

Insomnia: **DELETE** `http://localhost:3001/books/1` (no body) → `200`. `GET /books` — book 1 gone. Delete that id again → `404`.

---

## Part 3: Submission

1. Push updated `server.js` (not `node_modules/`)
2. Fill [`submission.md`](submission.md)

Restart once and notice the two seed books come back — that’s “in memory.” Databases are how you keep data after a restart.

---

## AI note

AI is fine. You still need to explain each route and the status codes.

## Self-check

- [ ] `POST` from class still works
- [ ] `PUT /books/:id` → `200` / `404`
- [ ] `DELETE /books/:id` → `200` / `404`
- [ ] `submission.md` filled + pushed
