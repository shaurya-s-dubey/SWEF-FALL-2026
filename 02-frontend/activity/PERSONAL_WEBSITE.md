# Activity: Claim Your Corner of the Internet (~70 minutes)

Build the first version of **your** personal website. Fun > perfect. Homework continues this same project.

> **Prep matters.** No lecture today. Stuck on Node/setup? Raise your hand early.

**Why Next.js (not plain React)?**  
Plain React is great for one screen. You need a **second page** for homework (home + interest). Next.js gives you that for free: a new folder under `app/` = a new URL. Same React underneath — Next just handles the project + routing.

---

## Goal (by the end of class)

1. Next.js + Tailwind running at `localhost:3000`
2. Home page with **your name**, a **short bio**, and **social links**
3. Styled with Tailwind

**Not today:** navbar, second page, deploy → homework

---

## Timeline

| Time | What |
| --- | --- |
| 0–10 min | Setup + create project |
| 10–20 min | File tour (what just appeared?) |
| 20–55 min | Build your home page |
| 55–70 min | Polish + help neighbors |

---

## Before you start

```bash
node --version
npm --version
```

Both should print a version. Work individually (helping friends is encouraged).

Optional vibes: [webofdevs.com](https://webofdevs.com/)

---

## Step 1 — Create the project (~10 min)

```bash
cd 02-frontend/hw
npx create-next-app@latest mywebsite
```

**Answer the prompts like this:**

| Prompt | Answer |
| --- | --- |
| TypeScript | **Yes** |
| ESLint | **Yes** |
| Tailwind CSS | **Yes** |
| `src/` directory | **No** |
| App Router | **Yes** |
| Turbopack | **Yes** (if asked) |
| Import alias `@/*` | **Yes** / default |

Then:

```bash
cd mywebsite
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — you should see the Next.js starter page.

> If you see a `mywebsite/.git` folder, delete **only that nested one** (`rm -rf .git` inside `mywebsite`) so the site stays in your SWEF fork.

Leave the terminal running. Open `mywebsite` in VS Code in a second window.

---

## Step 2 — What just appeared? (read this once, ~5–10 min)

After `create-next-app`, a bunch of files show up. **You only edit a couple today.** Here’s the short version:

```
mywebsite/
├── app/
│   ├── page.tsx        ← YOU EDIT THIS (the home page at "/")
│   ├── layout.tsx      ← wraps every page (title, fonts, later: nav)
│   ├── globals.css     ← keep the Tailwind lines; ignore the rest for now
│   └── favicon.ico     ← browser tab icon
├── public/             ← drop images here (e.g. me.jpg → /me.jpg)
├── package.json        ← project name + scripts (`npm run dev`)
├── next.config.ts      ← Next.js settings (don't touch today)
├── tsconfig.json       ← TypeScript settings (don't touch today)
├── postcss.config.mjs  ← helps Tailwind work (don't touch today)
├── eslint.config…      ← code linting (don't touch today)
├── next-env.d.ts       ← auto-generated types (don't touch)
├── node_modules/       ← installed libraries (never edit)
└── .gitignore          ← tells Git what to skip (e.g. node_modules)
```

| File | What it does | Touch it today? |
| --- | --- | --- |
| `app/page.tsx` | The UI for `/` — a React function that returns JSX | **Yes — main file** |
| `app/layout.tsx` | Shared shell around all pages | Glance only |
| `app/globals.css` | Global styles + Tailwind imports | Only if broken |
| `public/` | Static files (images) | Optional (photo) |
| `package.json` | Dependencies + `npm run dev` | No |
| `next.config.ts` | Framework config | No |
| `node_modules/` | Downloaded packages | **Never** |

**Mental model:**  
`page.tsx` = the HTML you’d write by hand, but as a React component. Tailwind classes go in `className="..."`. Save → browser updates.

Homework preview: `app/soccer/page.tsx` → URL `/soccer`. You don’t need that yet.

---

## Step 3 — Build your home page (~35 min)

**You write the code.** Clear the starter junk in `app/page.tsx` and build the page yourself.

**Starting shape only** (fill in the `...` — this is not a finished site):

```tsx
export default function Home() {
  return (
    <main className="...">
      <h1 className="...">...</h1>
      {/* bio, links, whatever else you want */}
    </main>
  );
}
```

**Must be on the page:**

- Your **name** (styled so it stands out)
- A **short bio** (who you are / what you’re into / why SWEF)
- At least one **link** (GitHub, LinkedIn, etc.)
- Styling with **Tailwind** (`className="..."`, not `class=`)

**Optional:** a photo — put the file in `public/` and reference it from your page.

**Tiny reminders:**

- Links use `<a href="...">`
- Use tags like `p`, `div`, `section`, `a` as needed
- Save → `localhost:3000` should update

Stuck? Revisit [../pre/README.md](../pre/README.md), the cheatsheet below, a neighbor, or a facilitator. AI is fine **if** you can explain every class and tag you keep.

---

## Tailwind cheatsheet (keep this open)

| Class | Does |
| --- | --- |
| `flex` `gap-4` `flex-wrap` | Row layout + spacing |
| `px-6` `py-16` `p-4` | Padding |
| `text-5xl` `font-bold` | Big / bold text |
| `bg-slate-950` `text-emerald-400` | Colors |
| `max-w-2xl` `mx-auto` | Centered readable width |
| `hover:bg-emerald-400` | Hover style |
| `min-h-screen` | Full page height |
| `md:text-6xl` | Bigger text on medium+ screens |

Search [tailwindcss.com/docs](https://tailwindcss.com/docs) when you need a class — don’t paste a whole layout from somewhere else and call it done.

---

## Step 4 — Polish (~15 min)

- Pick a vibe (minimal, loud, sporty, cozy…)
- Fix awkward spacing
- Help a neighbor if you’re done early

---

## Done when

- [ ] Site loads at `localhost:3000`
- [ ] Name + bio + ≥1 social link
- [ ] You edited `app/page.tsx` (not random config files)
- [ ] You can say what `page.tsx` vs `layout.tsx` vs `public/` are for

Commit when ready. Homework = same folder + nav + interest page.
