# Ariz Karim — Portfolio

Design-first frontend portfolio. Static site — plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step.

## Folders

- `index.html` — Home (hero, process, work teaser, contact banner)
- `about.html` — bio, portrait, and toolkit
- `work.html` — the full project grid
- `contact.html` — contact details and calls to action
- `css/`, `js/` — styles and scripts (shared across all pages)
- `projects/` — the working pages behind each project card
- `images/` — poster images used by the project cards
- `archive/` — older experiments, kept out of the main site

Each page shares the same header and footer — the active nav item is marked with `aria-current="page"`.

---

## How to add a new project (no code knowledge needed)

All project cards come from one file:

```
js/projects.js
```

**Step 1 — Make the actual project page.**

Put your finished page in the `projects/` folder (name it something tidy, no spaces), e.g. `projects/my-new-tool.html`. Any CSS/JS it needs goes in the same folder.

**Step 2 — Add a card by copying one block.**

Open `js/projects.js`. At the very top there's an "EXAMPLE" block you can copy. Paste a filled-in copy at the end of the array, right before the closing `];`.

Each card is one object with these fields:

| Field      | What to write |
|------------|---------------|
| `title`    | Short project name, shown as the card heading |
| `tagline`  | One sentence for a client: what it does, who it's for |
| `problem`  | The real problem the tool solves for its user |
| `decision` | One design or technical choice worth mentioning |
| `tech`     | List of technologies used, e.g. `["HTML5", "CSS3", "JavaScript"]` |
| `image`    | A poster image inside `images/` (optional — you can point to any file) |
| `liveUrl`  | Path to your page from Step 1, e.g. `projects/my-new-tool.html` |
| `featured` | `true` shows the card on the grid, `false` hides it |

**Step 3 — Save and refresh.**

Open `index.html` in a browser. The new card appears in the grid automatically — no HTML edits, no new sections.

### Hide a project without deleting it

Set its `featured` field to `false`. The card disappears from the grid, but the data stays in the file — flip it back to `true` whenever you want it visible again.

### What counts as "a project worth showing"

The grid is for things a business could actually use — something with a real outcome for the user. If a build is more of a syntax exercise, keep it out of `projects.js` and drop its files into `archive/` instead.

---

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages** and set the source to the `main` branch, root folder.
3. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

No extra configuration needed — it's all static files.