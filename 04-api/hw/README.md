# Homework 4: Wrap the OpenAI API

**Objective:** One Express route — `POST /ask` — that takes `{ "prompt": "..." }`, calls OpenAI, and returns `{ "reply": "..." }`. Easy–medium. No frontend. Not more Books CRUD.

Class wrap-up covers the idea. You still peek at [Chat Completions](https://platform.openai.com/docs/api-reference/chat) if something in the steps is unclear.

---

## Overview (skippable — skip if you already looked at the OpenAI page / wrap-up)

You can skip this section and go straight to **Setup** if you want to learn from the docs yourself.

- **Your** API: Insomnia → `POST http://localhost:3002/ask` with a JSON `prompt`
- **Their** API: your server `fetch`es OpenAI Chat Completions
- Key goes in `.env` as `OPENAI_API_KEY` — never in code, never on GitHub
- Cheap model: `gpt-4o-mini`
- The text you want in their JSON is usually `choices[0].message.content` (confirm on their page)

Keys: [platform.openai.com/api-keys](https://platform.openai.com/api-keys)  
Docs: [Chat Completions](https://platform.openai.com/docs/api-reference/chat)

---

## Setup

```bash
cd 04-api/hw
npm install
cp .env.example .env
```

Open `.env` and paste your key after `OPENAI_API_KEY=`. Then:

```bash
npm run dev
```

`http://localhost:3002` — different port from the Books API.

---

## What to write

In [`server.js`](server.js), replace the `501` inside `POST /ask`.

1. Read `prompt` from `req.body`. If it’s missing → `400` `{ error: "prompt is required" }`
2. `fetch` `https://api.openai.com/v1/chat/completions` as **POST** with:
   - `Authorization: Bearer ` + `process.env.OPENAI_API_KEY`
   - `Content-Type: application/json`
   - body: `model: "gpt-4o-mini"` and `messages: [{ role: "user", content: prompt }]`
3. `await openaiRes.json()`, then `res.json({ reply: data.choices[0].message.content })`

`dotenv` is already loaded at the top of `server.js`. You do **not** need the OpenAI npm package — Node’s `fetch` is enough.

### Starter shape (fill this in)

```js
app.post("/ask", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "prompt is required" });
  }

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await openaiRes.json();
  // res.json({ reply: /* the assistant text from data */ });
});
```

---

## Test (keep it short)

Insomnia: **POST** `http://localhost:3002/ask`, Body → **JSON**:

```json
{ "prompt": "Say hello in one short sentence." }
```

You should get `200` and `{ "reply": "..." }`. That’s the main check. Optionally send `{}` and see `400`.

---

## Git: do not commit junk or secrets

[`.gitignore`](.gitignore) already lists:

```
node_modules/
.env
```

Those must **not** go to GitHub (huge folder + your secret key).

Before you push:

```bash
git status
```

If you see `.env` or `node_modules/`, stop and fix gitignore — do not `git add` them. You **should** add `server.js` and `submission.md`. `.env.example` (no real key) is fine.

Never paste the key into Slack, the README, or `submission.md`.

---

## Submit

1. Push `04-api/hw/` **without** `.env` / `node_modules`
2. Fill [`submission.md`](submission.md)

No key after trying? Message facilitators before the deadline.

## Self-check

- [ ] Insomnia `POST /ask` returns `{ reply: "..." }`
- [ ] `git status` does **not** show `.env` or `node_modules`
- [ ] `submission.md` filled + pushed
