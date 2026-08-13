# Pre-work: APIs & REST

Budget ~**25 minutes**. Class is short and hands-on — setup belongs **here**.

---

## What you should have ready

- Know what an **API** is (and what it’s for)
- **Insomnia** installed and opened once
- Starter dependencies installed (`npm install` in the activity folder)

---

## 1. What is an API? (~15 min)

**API** = Application Programming Interface. For web backends: a set of URLs a server exposes so other programs (a website, a phone app, another service) can read or change data.

Restaurant metaphor:

| Metaphor | In software |
| --- | --- |
| Menu | Endpoints (`/books`, `/books/1`, …) |
| Your order | The **request** (method + URL + optional JSON body) |
| Kitchen | Server logic |
| Food coming back | The **response** (status code + JSON) |

You talk to the waiter (the API). You don’t go into the kitchen.

**Why this exists:** frontend and backend can be separate; many clients can share one backend; you can test the backend **before** any UI exists (that’s what Insomnia is for).

Watch **one**:

- [What is an API? (~3 min)](https://www.youtube.com/watch?v=-0MmWEYR2a8)
- Optional: [RESTful APIs in 100 Seconds](https://www.youtube.com/watch?v=-MTSQjw5DrM) — the 100-seconds part is enough

### REST in one table

URLs are **nouns**. HTTP methods are **verbs**.

| Method | Meaning | Example |
| --- | --- | --- |
| `GET` | Read | `GET /books` |
| `POST` | Create | `POST /books` (JSON body) |
| `PUT` | Update | `PUT /books/2` |
| `DELETE` | Remove | `DELETE /books/2` |

Status codes you’ll see: `200` ok, `201` created, `400` you sent something wrong, `404` not found, `500` server bug.

Class uses **Express** (Node) and an array as a fake database. Restart = data resets. That’s fine.

---

## 2. Install Insomnia (Required)

A browser address bar is basically `GET` only. It cannot send a `POST` with JSON. **Insomnia** is a small app for sending any HTTP request and reading the response. That’s how you talk to an API with no frontend.

1. Download: [insomnia.rest/download](https://insomnia.rest/download)
   - Mac: `.dmg` → drag to Applications. First open: right-click → **Open** if macOS blocks it
   - Windows: `.exe` installer
2. Open it. **You do not need an account.** Look for **Use the local Scratch Pad** (or similar “skip / local” wording) and use that.
3. Confirm you can make an HTTP request: method dropdown + URL bar + **Send**

You don’t need a collection yet — class will send `http://localhost:3001/books`.

---

## 3. Install the starter once (Required)

So class isn’t spent waiting on npm:

```bash
cd 04-api/activity/starter
npm install
```

That should finish without errors. You do **not** need to run the server until class (`npm run dev`).

Confirm Node still works:

```bash
node --version
npm --version
```

---

## Checklist

- [ ] Can explain what an API is for in one or two sentences
- [ ] Know `GET` vs `POST`
- [ ] Insomnia opens (no account required)
- [ ] `npm install` done in `04-api/activity/starter`
