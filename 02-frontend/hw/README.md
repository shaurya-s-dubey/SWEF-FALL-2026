# Homework 2: Claim Your Corner of the Internet

**Objective:** Finish the personal website you started in class — polish the home page, add navigation, and build a second page about an interest of yours — using **Next.js**, **TypeScript**, and **Tailwind CSS**.

**Inspiration:** [webofdevs.com](https://webofdevs.com/) — steal vibes, don't clone layouts.

**Optional later:** deploy for free on [Vercel](https://vercel.com/).

---

## Prerequisites

1. You forked this repository (Git week).
2. You did the in-class activity and have a project at `02-frontend/hw/mywebsite/`.
3. Missed class? Do [../activity/PERSONAL_WEBSITE.md](../activity/PERSONAL_WEBSITE.md) **first**, then come back here.

Concepts and videos are all in [../pre/README.md](../pre/README.md) — that's the lecture. Use it if anything is fuzzy.

---

## Part 1: Polish the home page

```bash
cd 02-frontend/hw/mywebsite
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and improve `app/page.tsx` so it has:

- Your **name** (prominent)
- A **bio**
- Links to **GitHub**, **LinkedIn**, and/or other socials
- Tailwind styling throughout
- (Optional) a profile picture — drop it in `public/` and reference it from the page

Make it something you'd actually send to a friend.

---

## Part 2: Add navigation

Add a simple **navbar** that appears on every page with links to:

- **Home** → `/`
- **Your interest page** → e.g. `/soccer`, `/running`, `/music` (your choice)

**Hints — you implement it:**

- Shared UI belongs in `app/layout.tsx` so every page gets the nav automatically
- Use Next's `Link` (not a plain `<a>`) for internal routes
- Style it with Tailwind

Starting shape only:

```tsx
import Link from "next/link";

// inside layout.tsx, wrapping {children}:
<nav className="...">
  <Link href="/">...</Link>
  <Link href="/your-interest">...</Link>
</nav>
```

**Example route ideas** (pick anything that fits you):

| Interest | Route |
| --- | --- |
| Soccer | `/soccer` |
| Running | `/running` |
| Cooking | `/cooking` |
| Photography | `/photography` |
| Music | `/music` |
| Gaming | `/gaming` |
| Climbing | `/climbing` |
| Film / anime | `/film` |

Keep the path short and lowercase.

---

## Part 3: Build an interest page

Create a **second page** about something you care about outside of class.

Example — if your interest is running:

```bash
mkdir -p app/running
# then create app/running/page.tsx
```

That file becomes the route `/running`. Same page-component shape as class — you write the content:

```tsx
export default function InterestPage() {
  return (
    <main className="...">
      <h1 className="...">...</h1>
      {/* your content here */}
    </main>
  );
}
```

**Minimum on this page:**

1. A **title** for the interest
2. A **short story** — why you care (a few sentences)
3. **At least one of:** a small list, fun facts, or a link/embed out (playlist, team site, video, …)
4. Tailwind styling with some personality
5. Working **nav back to Home** — not just the browser back button

Ideas: favorite team, race PRs, recipes, albums, games, how you got into it. Make it *you*, not a Wikipedia stub.

---

## Part 4: Hygiene + commit

1. `npm run dev` runs with no errors
2. Click **Home ↔ Interest** using your nav
3. If `mywebsite` has a nested `.git` folder, remove **only that one** so the site stays inside your SWEF fork:
   ```bash
   # run this from inside mywebsite/ — NOT the repo root
   rm -rf .git
   ```
4. Commit and push to **your fork** (`node_modules` should already be in `.gitignore`)

---

## Part 5: Submission

Fill out [`submission.md`](submission.md) in this folder (~**200 words** across the sections) covering:

1. What you learned about frontend this week
2. How Next.js compares to writing raw HTML/CSS
3. How React, TypeScript, Tailwind, and Next.js fit together
4. What your interest page is and why you chose it
5. (Optional) Vercel link if you deployed

Also include:

- **Screenshots** of your home page and interest page (embed them in the markdown or add `home.png` / `interest.png` here and link them)
- Confirmation your project is at `02-frontend/hw/mywebsite`

---

## AI Disclosure & Academic Integrity

AI tools are allowed (ChatGPT, Claude, Cursor, Copilot, …).

**You must still be able to explain your code.** If asked what `flex-col` does, why something is typed as `string`, or what `app/running/page.tsx` maps to — you need the answer. Use AI to learn faster, not to skip understanding.

---

## Self-check before submitting

- [ ] `npm run dev` works with no errors
- [ ] Home page: name, bio, socials, Tailwind styling
- [ ] Shared navbar between pages
- [ ] Interest page on its own route with real personal content
- [ ] `submission.md` filled out with screenshots
- [ ] Pushed to your fork
