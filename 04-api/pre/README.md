# Pre-work: APIs (this is the lecture)

Class is a **review** plus a build. Learn from the resources below; the notes here are only so you know *why* you’re watching/reading. Budget ~**50–60 minutes** for the required parts.

If you skip this, the activity will feel like typing into a void.

---

## What you’ll be able to do after this

- Explain REST well enough to build: resources, methods, JSON, status codes
- Know Express (class) vs FastAPI (Python — same idea)
- Use **Insomnia** to send GET/POST
- Know that calling someone else’s API is still HTTP (homework uses **OpenAI** — research that when you get there)
- Show up ready to finish the Books API in class

---

## 1. What is an API? (Required, ~8 min)

Watch **one**:

- [What is an API? (~3 min)](https://www.youtube.com/watch?v=-0MmWEYR2a8)
- Then: [RESTful APIs in 100 Seconds (Fireship)](https://www.youtube.com/watch?v=-MTSQjw5DrM) — the opening ~2 minutes is enough; the Express build-along is optional

**Takeaway:** an API is how programs talk over HTTP. Class = you **build** one. Homework = you **call** someone else’s (OpenAI).

---

## 2. REST, HTTP, JSON (Required, ~15 min)

Read these (skim, don’t memorize every page):

| Resource | What to get from it |
| --- | --- |
| [MDN — HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) | Request / response, URLs, headers |
| [MDN — HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods) | `GET` `POST` `PUT` `DELETE` |
| [MDN — HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) | Focus on `200` `201` `400` `401` `404` `500` |
| [Codecademy — What is REST?](https://www.codecademy.com/article/what-is-rest) | Resources in the URL, verbs as methods, JSON |

**Takeaway for class:** `/books` is the collection, `/books/2` is one item. `POST` creates on the collection (needs a JSON body). `PUT` / `DELETE` need an id. Status codes tell the client what happened. In class the “database” is an array — restart resets it.

---

## 3. Building: Express and FastAPI (Required, ~12 min)

Same REST contract. Different language. **Class uses Express** (you already have Node). FastAPI is so Python APIs don’t look alien.

| Resource | Required? | What to get from it |
| --- | --- | --- |
| [Express — Hello world](https://expressjs.com/en/starter/hello-world.html) | Yes (~3 min) | `app.get`, `app.listen` |
| [Express — Routing](https://expressjs.com/en/guide/routing.html) | Yes — skim `req.params`, `req.body` | Path params vs JSON body |
| [FastAPI — First steps](https://fastapi.tiangolo.com/tutorial/first-steps/) | Yes (~5–8 min) | `@app.get`, `/docs` |
| [FastAPI crash course](https://www.youtube.com/watch?v=qJTFL7YfgZI) | Optional | You do **not** need to code along |

**Takeaway:** `app.get("/books/:id", ...)` and `@app.get("/books/{id}")` are the same idea. You are not writing FastAPI in class.

---

## 4. External APIs (Required, ~8 min) — OpenAI is homework

Calling GitHub, weather, Stripe, or OpenAI is the same HTTP you just read: URL, method, headers, JSON body, parse JSON back. **You** are the client.

| Resource | Required now? | What to get from it |
| --- | --- | --- |
| [MDN — Using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) | Yes — “Supplying request options” (POST + headers) | How your server sends HTTP to *another* server |
| [MDN — HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers) | Skim `Authorization` / `Content-Type` | Keys travel in headers, not in the URL |
| [OpenAI — API overview](https://platform.openai.com/docs/overview) | Optional before class | Homework — we’ll recap a bit in wrap-up; **you** read the Chat Completions docs for the assignment |

**Takeaway:** never commit secrets. Homework is a tiny Express `POST /ask` that forwards a prompt to OpenAI and returns `{ reply }`. Do **not** implement that before class. After class: get a key, read [Chat Completions](https://platform.openai.com/docs/api-reference/chat), use a cheap model (`gpt-4o-mini`). If signup is blocked, tell a facilitator before the deadline.

---

## 5. Insomnia (Required, ~10 min)

A browser address bar is basically `GET`. Insomnia sends any method, headers, and JSON.

1. Install: [insomnia.rest/download](https://insomnia.rest/download)
   - Mac: `.dmg` → Applications (right-click → **Open** if macOS blocks it)
   - Windows: `.exe`
2. **No account required** — use **local Scratch Pad** / skip login if you see it
3. Follow their guide: [Send your first request](https://docs.insomnia.rest/insomnia/send-your-first-request) (or the current “first request” page in [Insomnia docs](https://docs.insomnia.rest/))

Then practice on a fake public API (no key):

- **GET** `https://jsonplaceholder.typicode.com/posts/1` → `200` + JSON
- **POST** `https://jsonplaceholder.typicode.com/posts` with Body type **JSON**:

```json
{ "title": "swef", "body": "hello", "userId": 1 }
```

Expect `201`. If it fails, Body is probably not set to JSON — that will bite you in class too.

**Takeaway:** method dropdown, URL, Body → JSON, Send, read the status + body on the right.

---

## 6. Class starter (Required, ~5 min)

```bash
cd 04-api/activity/starter
npm install
node --version
npm --version
```

Do **not** need `npm run dev` until class.

---

## Extra (optional)

| Resource | When |
| --- | --- |
| [MDN — URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) | Path vs query string |
| [Express request object](https://expressjs.com/en/api.html#req) | `req.params` / `req.body` / `req.query` |
| [FastAPI tutorial (full)](https://fastapi.tiangolo.com/tutorial/) | You think in Python |
| [Open-Meteo](https://open-meteo.com/en/docs) | External API with no key (not homework) |

---

## Checklist

- [ ] Watched the API + REST 100-seconds videos
- [ ] Read the MDN / Codecademy REST pieces (methods + status codes)
- [ ] Skimmed Express hello world + routing, and FastAPI first steps
- [ ] Know homework will be OpenAI (research after class — not required for the activity)
- [ ] Insomnia installed; GET (and POST) to JSONPlaceholder worked
- [ ] `npm install` done in `04-api/activity/starter`
