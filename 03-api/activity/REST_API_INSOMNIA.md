# Activity: Build an API, Poke It With Insomnia (~70 minutes)

You are going to finish a small **REST API** for a bookshelf, then use **Insomnia** to send it real
`POST`, `PUT` and `DELETE` requests and watch the data change.

Why Insomnia? Your browser's address bar can only do `GET`. It cannot send a `POST` with a JSON body.
Insomnia is the tool that lets you talk to an API *before* any frontend exists — which is exactly how
backend engineers work day to day.

---

## Goal (by the end of class)

1. Insomnia installed, with a collection called **Books API**
2. The starter server running at `localhost:3001`
3. **`POST /books`**, **`PUT /books/:id`** and **`DELETE /books/:id`** written by you and working
4. A screenshot of Insomnia showing a successful `POST` (you'll want it for homework)

**Not today:** databases, auth, deploying → later sessions

## Before you start

```bash
node --version
npm --version
```

Both should print a version (Node 18 or newer). If not, install Node from
[nodejs.org](https://nodejs.org/) — grab the **LTS** build.

---

## Step 1 — Install and set up Insomnia (~10 min)

### 1a. Download it

**Option A — the website (everyone):**

1. Go to **[insomnia.rest/download](https://insomnia.rest/download)**
2. Pick your platform:
   - **Mac** — download the `.dmg`. Open it, drag **Insomnia** into your **Applications** folder.
     First launch: right-click the app → **Open** → **Open** (macOS blocks double-clicked downloads).
   - **Windows** — download the `.exe` installer and run it. If Windows SmartScreen warns you, click
     **More info** → **Run anyway**.
   - **Linux** — use the `.AppImage` or the `.deb`, whichever you're comfortable with.

**Option B — a package manager (if you already have one):**

```bash
# macOS
brew install --cask insomnia

# Windows
winget install Insomnia.Insomnia
```

### 1b. Get past the login screen

Insomnia will ask you to log in or make an account. **You do not need an account for this class.**

- On the welcome screen, look for **"Use the local Scratch Pad"** (small text, usually at the bottom)
  and click that. Everything stays on your laptop.
- If you only see login buttons, logging in with GitHub/Google is fine too — just don't put anything
  secret in there.

> Ask a facilitator if you can't find the Scratch Pad link — the wording moves between versions.

### 1c. Make a place to keep your requests

1. Click **Create** (or the **+**) → **Request Collection**
2. Name it **`Books API`** → **Create**
3. Inside it, click **+** → **HTTP Request**. You now have an empty request that looks like:

```
[ GET ▾ ]  [ https://...                     ]  [ Send ]
```

Three parts to know, and that's the whole tool:

| Part of the screen | What it is |
| --- | --- |
| The dropdown on the left (`GET`) | The **method** — GET / POST / PUT / DELETE |
| The long text field | The **URL** you're sending to |
| The **Body** tab (under the URL) | The **JSON you send** — used by POST and PUT |
| The right-hand pane | The **response** — status code on top, body below |

Rename a request by double-clicking its name in the sidebar. Do that as you go
(`Get all books`, `Create book`, …) or you'll end up with eight tabs called "New Request".

---

## Step 2 — Run the starter server (~10 min)

The code lives in this folder. From the repo root:

```bash
cd 03-api/activity/starter
npm install
npm run dev
```

You should see:

```
Books API listening on http://localhost:3001
```

Leave that terminal running — the server has to stay up for Insomnia to reach it. `npm run dev`
restarts automatically every time you save `server.js`.

Open `starter/` in VS Code in another window and read [starter/server.js](starter/server.js) top to
bottom. It's short. Notice:

- `books` — a plain array. **This is our whole database today.** Restart the server and your changes
  are gone. That's expected.
- `app.get("/books", ...)` and `app.get("/books/:id", ...)` — **already written for you.** These two
  are your template for everything else.
- Three `TODO`s that currently reply `501 Not Implemented`. Those are yours.

### Your first request

In Insomnia: method **GET**, URL `http://localhost:3001/books` → **Send**.

You should get **`200 OK`** and:

```json
[
  { "id": 1, "title": "The Pragmatic Programmer", "author": "Hunt & Thomas", "read": true },
  { "id": 2, "title": "Clean Code", "author": "Robert C. Martin", "read": false }
]
```

Now try `http://localhost:3001/books/1` (one book) and `http://localhost:3001/books/99` (a
**`404 Not Found`**). Then try `POST http://localhost:3001/books` — you'll get **`501`**, because you
haven't written it yet. Good. That's the starting line.

> **Nothing at all happening / "Error: Failed to fetch"?** The server isn't running, or you typed
> `https` instead of `http`, or the wrong port. Check the terminal.

---

## Step 3 — The vocabulary you need (read once, ~10 min)

A **REST API** is a set of URLs where the **noun is in the URL** and the **verb is the HTTP method**.
Same URL, different method, different behavior:

| Method | On `/books` | On `/books/2` | Has a body? |
| --- | --- | --- | --- |
| `GET` | list all books | read book 2 | no |
| `POST` | **create** a new book | — | **yes** |
| `PUT` | — | **update** book 2 | **yes** |
| `DELETE` | — | **remove** book 2 | no |

Note the pattern: **`POST` goes to the collection** (`/books`) because the thing doesn't exist yet and
has no id. **`PUT` and `DELETE` go to one item** (`/books/2`) because you must say *which* one.

**Status codes** are how the server tells you what happened. You only need five today:

| Code | Means | You'll return it when |
| --- | --- | --- |
| `200 OK` | worked | GET / PUT / DELETE succeeded |
| `201 Created` | worked, and something new exists | POST succeeded |
| `400 Bad Request` | *you* sent something wrong | the request body is missing `title` |
| `404 Not Found` | no such thing | that id isn't in the array |
| `500` | *the server* broke | you have a bug 🙂 |

And the bits of code you'll be using:

| Code | What it gives you |
| --- | --- |
| `req.params.id` | the `:id` from the URL — **always a string**, so `Number(...)` it |
| `req.body` | the JSON Insomnia sent (works because of `app.use(express.json())`) |
| `res.json(x)` | send `x` back as JSON, status 200 |
| `res.status(201).json(x)` | send `x` back with a specific status code |
| `return res.status(404)...` | **`return`** so the function stops there |

---

## Step 4 — Write the three endpoints (~30 min)

Do them **in order**, and **test each one in Insomnia before moving on.** Do not write all three and
then hit Send — you'll have three bugs at once and no idea which is which.

### TODO 1 — `POST /books` (create)

Open `server.js`, find `app.post("/books", ...)`, and replace the `501` line with real logic:

- Pull `title` and `author` out of `req.body`
- If either is missing → `400` with `{ error: "title and author are required" }`
- Otherwise make `{ id: nextId++, title, author, read: false }`, `push` it onto `books`
- Respond **`201`** with the book you just created

**Test it in Insomnia** — this is the one people get wrong, so go slowly:

1. Method → **POST**, URL → `http://localhost:3001/books`
2. Click the **Body** tab → choose **JSON** from the dropdown
3. Type this into the body editor:
   ```json
   {
     "title": "Designing Data-Intensive Applications",
     "author": "Martin Kleppmann"
   }
   ```
4. **Send**

Expect **`201 Created`** and your book back **with an `id` the server chose**. Then send
`GET /books` again — three books now. **You just changed server state from a tool that has no
frontend.** That's the whole point of today.

Now send the POST again with an empty body `{}` → you should get your **`400`**.

> **Got a `500` and a wall of HTML that says `Cannot destructure property 'title' of 'req.body' as it
> is undefined`?** You forgot to set the Body type to **JSON**. Insomnia sent plain text, Express
> didn't parse it, so `req.body` is `undefined`. Set the dropdown to **JSON** and resend — this is the
> single most common mistake in this activity.

<details>
<summary>Totally stuck on TODO 1? Open this — but then write 2 and 3 yourself.</summary>

```js
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "title and author are required" });
  }

  const book = { id: nextId++, title, author, read: false };
  books.push(book);

  res.status(201).json(book);
});
```

</details>

### TODO 2 — `PUT /books/:id` (update)

- Find the book by id (copy the `find` line from `GET /books/:id`)
- Not there → `404`
- There → overwrite its fields from `req.body`, respond `200` with the updated book

**Test:** method **PUT**, URL `http://localhost:3001/books/2`, Body → JSON:

```json
{ "title": "Clean Code", "author": "Robert C. Martin", "read": true }
```

Expect `200` and `"read": true`. Confirm with `GET /books/2`. Then `PUT /books/99` → `404`.

**Hint:** `Object.assign(book, req.body)` copies the sent fields onto the found object. Because
`book` is the same object that's sitting inside the `books` array, mutating it updates the array too —
no re-inserting needed.

### TODO 3 — `DELETE /books/:id` (remove)

- Find the **index** with `books.findIndex((b) => b.id === Number(req.params.id))`
- `findIndex` returns `-1` when there's no match → `404`
- Otherwise `books.splice(index, 1)` and respond `200` with `{ deleted: <the book> }`

**Test:** method **DELETE**, URL `http://localhost:3001/books/1`, **no body**. Expect `200`. Then
`GET /books` — book 1 is gone. Then `DELETE /books/1` **again** → `404`, because it's already gone.

---

## Step 5 — Break it on purpose (~10 min)

Real API work is mostly handling the wrong request, not the right one. Send each of these and write
down the status code you get:

| Send this | Status you got | Status you *should* get |
| --- | --- | --- |
| `POST /books` with body `{}` | | `400` |
| `POST /books` with body `{ "title": "No Author" }` | | `400` |
| `PUT /books/9999` with a valid body | | `404` |
| `DELETE /books/9999` | | `404` |
| `GET /bookz` (typo in the URL) | | `404` (Express does this for free) |
| `POST /books/1` | | `404` — POST goes to the collection, not an item |

If any row is wrong, fix your handler. When they all match, restart the server (`Ctrl+C`, then
`npm run dev`) and notice you're back to two books — that's what "in memory" means, and it's why
session 4 is about databases.

Done early? Add `GET /books/unread` that returns only books where `read` is `false`. (Careful: put it
**above** `GET /books/:id` in the file, or `:id` will swallow the word `unread`. Ask a facilitator why.)

---

## Done when

- [ ] Server runs at `localhost:3001` and `GET /books` returns JSON in Insomnia
- [ ] `POST /books` returns `201` and the new book appears in `GET /books`
- [ ] `PUT /books/:id` changes a book and returns `200`
- [ ] `DELETE /books/:id` removes a book and returns `200`
- [ ] All three return `404` / `400` on bad input instead of crashing
- [ ] Your Insomnia collection has four named requests saved
- [ ] You can explain why `POST` goes to `/books` but `DELETE` goes to `/books/:id`

Screenshot your successful `POST` (Insomnia showing `201` + the response body) — homework asks for it.
Commit your `server.js` when you're done. `node_modules/` is already gitignored; don't commit it.
