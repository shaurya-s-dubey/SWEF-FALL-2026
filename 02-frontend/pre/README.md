# Pre-work: Frontend Crash Course (this is the lecture)

There is **no lecture in class** this week — only a hands-on activity. Everything you need to learn beforehand lives **here**. Class time assumes you already did this.

 If you skip this, you will be lost. Budget ~**1 hour 15 minutes** for the required parts. Optional extras are for when you’re stuck or want to go deeper — on your own time.

---

## What you’ll be able to do after this

- Explain how a browser loads a page (HTML → CSS → JS)
- Know what **React**, **Next.js**, **TypeScript**, and **Tailwind** each do
- Show up ready to run `create-next-app` and edit `app/page.tsx` in class
- Later (homework): add a second page + navbar using the App Router

---

## 1. Install Node.js (Required)

Node.js runs JavaScript tools on your machine (including Next.js). It includes **npm**.

1. Download the **LTS** install from [nodejs.org](https://nodejs.org/)
2. Install it, then verify in a terminal:

```bash
node --version
npm --version
```

Both should print version numbers. Fix this before class if either fails.

You should already have **VS Code** and **Git** from week 1.

---

## 2. Web foundations video (Required, ~54 min)

Watch **from the start through 53:47** — stop there. You do **not** need the rest of the video for SWEF.

**[Frontend foundations crash course](https://www.youtube.com/watch?v=c4n0CjXuZAY&t=0s)**  
(stop by [53:47](https://www.youtube.com/watch?v=c4n0CjXuZAY&t=3227s))

| Timestamp | What you’re learning |
| --- | --- |
| 0:00 – 10:22 | Anatomy of a web app, HTTP/HTTPS, how the browser builds a page (DOM, CSSOM, paint), MPA vs SPA vs SSG |
| 10:22 – 21:11 | HTML & CSS crash course — semantic HTML, box model, cascade, Flexbox/Grid, responsive design |
| 21:11 – 35:07 | JavaScript crash course — DOM, events, a small app, `localStorage`, `fetch` |
| 35:07 – 53:47 | JS essentials — equality, `let`/`const`, scope, promises / `async`, event loop overview |

**Takeaway:** HTML = structure, CSS = look, JS = behavior. Frameworks (React/Next) still rest on that.

You do **not** need to memorize every detail. Big picture > trivia.

---

## 3. The modern stack (Required, ~10 min)

Watch these **in order**. They’re short on purpose.

### React (~2 min)

[React in 100 Seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM)

- UI is built from **components** (functions that return markup)
- **JSX** looks like HTML inside JavaScript/TypeScript
- **Props** pass data in; **state** is data that can change over time
- React is the library. Next.js builds *on top of* React.

### Next.js (~2 min required)

[Next.js in 100 Seconds // Plus Full Beginner's Tutorial](https://www.youtube.com/watch?v=Sklc_fQBmcs)

- **Required:** the opening “100 seconds” overview
- **Optional:** keep watching the beginner tutorial if you want a guided create-app walkthrough before class

**Why Next.js (not plain React alone)?**  
React doesn’t give you routing or a full app structure by itself. Next.js does. Adding a second page is: new folder under `app/` → new URL. That matters for homework (home + interest page). Deploying later on [Vercel](https://vercel.com/) is also straightforward.

### Tailwind CSS (~2 min)

[Tailwind in 100 Seconds](https://www.youtube.com/watch?v=mr15Xzb1Ook)

- You already saw “regular” CSS in the foundations video
- Tailwind = same ideas, applied with utility classes in your markup (`flex`, `p-4`, `text-center`, …)
- In React/Next you put them in `className="..."`, not `class="..."`

### TypeScript (~2 min)

[TypeScript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)

- JavaScript + types (`.tsx` = TypeScript + JSX)
- You don’t need to master TS for class — just know it helps catch mistakes early

---

## 4. How the pieces fit (read once)

```
You open localhost:3000
        ↓
Next.js serves a route (e.g. app/page.tsx → "/")
        ↓
React components describe the UI (JSX)
        ↓
Tailwind classes style it
        ↓
TypeScript helps while you write
```

**Files you’ll care about in class** (you’ll also see this in the activity):

| File | Role |
| --- | --- |
| `app/page.tsx` | Home page (`/`) — main file you edit in class |
| `app/layout.tsx` | Shared wrapper for all pages (later: put nav here) |
| `app/globals.css` | Global CSS + Tailwind setup |
| `public/` | Images and static files |
| `package.json` | Scripts like `npm run dev` |

**Routing preview (homework):**  
`app/running/page.tsx` → `/running`. Same pattern for soccer, music, whatever you pick.

---

## 5. Extra resources (optional — when you’re stuck or curious)

These are **not** required before class. Use them if something doesn’t click, or while doing homework.

| Resource | Use it when… |
| --- | --- |
| [Next.js App Router Crash Course (James Q Quick)](https://www.youtube.com/watch?v=3SyJUpo3Sic) | You want folders → routes explained more slowly (~20–30 min) |
| [Next.js 15 Beginner Course (PedroTech)](https://www.youtube.com/watch?v=6jQdZcYY8OY) | You want a longer build-along (skim; ~1h 20m) |
| [Official Next.js Learn](https://nextjs.org/learn) | You like interactive official tutorials |
| [Next.js Docs — Routing](https://nextjs.org/docs/app/building-your-application/routing) | “How do I add another page / Link?” |
| [Tailwind Docs](https://tailwindcss.com/docs) | “What class centers this / adds padding?” |
| [webofdevs.com](https://webofdevs.com/) | Portfolio inspiration (look, don’t copy) |

---

## Checklist before class

- [ ] `node --version` and `npm --version` work
- [ ] Watched foundations video through **53:47**
- [ ] Watched React / Next.js / Tailwind / TypeScript “100 Seconds” videos
- [ ] You roughly know what `app/page.tsx` is for
- [ ] Ready to run `npx create-next-app@latest` in class
