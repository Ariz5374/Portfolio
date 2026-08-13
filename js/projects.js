/*
 * project config — the ONLY file you edit to add a project.
 *
 * The homepage reads this array and draws the project grid automatically.
 * You never touch the HTML or the layout code.
 *
 * ─── HOW TO ADD A PROJECT ─────────────────────────────────────────
 * 1. Copy the "example" block below.
 * 2. Fill in each field with your own values.
 * 3. Paste it at the END of the array (after the last }, add a comma).
 * 4. Save this file. Refresh the site — the card appears in the grid.
 *
 * If you want to REMOVE a project from view temporarily, just flip its
 * `featured` to false. It stays in the file, but stops showing.
 *
 * ─── FIELDS ───────────────────────────────────────────────────────
 * title     – short project name (shown as the card heading)
 * tagline   – one sentence, written for a client: what it does / who it's for
 * problem   – the real problem the project solves for a user
 * decision  – one design or technical decision worth calling out
 * tech      – list of the technologies used (badges on the card)
 * image     – path to a poster image inside /images
 * liveUrl   – path to the actual working page (see /projects)
 * featured  – true  = show on the main grid
 *             false = hide from the grid (kept in file)
 *
 * ─── EXAMPLE (copy, edit, paste) ───────────────────────────────────
 * {
 *   title: "My New Tool",
 *   tagline: "One sentence about what it does for its users.",
 *   problem: "What user problem this solves, in plain language.",
 *   decision: "One real design or technical choice you made.",
 *   tech: ["HTML5", "CSS3", "JavaScript"],
 *   image: "images/my-new-tool.svg",
 *   liveUrl: "projects/my-new-tool.html",
 *   featured: true
 * },
 */
const projects = [
  {
    title: "Game Library",
    tagline: "A browsable game collection with a poster-style grid — add any title, cover, and genre on the fly.",
    problem: "People who collect games need one place to see them all with their covers and categories, instead of scattered notes.",
    decision: "Each game is rendered from a data array as a poster card, so adding a title is a single object — never new markup.",
    tech: ["HTML5", "CSS3", "JavaScript", "ES6+"],
    image: "images/game-library.svg",
    liveUrl: "projects/game-library.html",
    featured: true
  },
  {
    title: "Storefront",
    tagline: "A full product storefront that pulls live catalog data, filters by category, and shows product detail views.",
    problem: "Small shops need an online catalog that reflects their inventory without rebuilding pages by hand.",
    decision: "Products load from a live API and render dynamically, so the whole catalog, filtering, and detail views work off one data source.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
    image: "images/storefront.svg",
    liveUrl: "projects/storefront.html",
    featured: true
  },
  {
    title: "Expense Tracker",
    tagline: "A personal finance tool for tracking income and spending in PKR, with a history that survives refresh.",
    problem: "People need a clear view of where their money goes — balance, income, and expenses — without a spreadsheet.",
    decision: "Transactions persist in the browser's local storage and amounts format for local currency, so the ledger is never lost.",
    tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    image: "images/expense-tracker.svg",
    liveUrl: "projects/expense-tracker.html",
    featured: true
  },
  {
    title: "Arcane Password Analyzer",
    tagline: "A fantasy-styled password strength checker that scores your password against five rules in real time.",
    problem: "Weak passwords are the easiest route into an account; users need clear, immediate feedback — not a lecture.",
    decision: "A live scoring system checks each requirement as you type and returns a visual strength readout, so weak habits surface instantly.",
    tech: ["HTML5", "CSS3", "JavaScript", "Regex"],
    image: "images/arcane-password-analyzer.svg",
    liveUrl: "projects/arcane-password-analyzer.html",
    featured: true
  },
  {
    title: "Dice Game",
    tagline: "A two-player tabletop scoreboard — alternate turns, double points on a six, first to 60 wins.",
    problem: "Board-game night needs a scorekeeper that handles turns, scoring rules, and the win condition automatically.",
    decision: "Turn logic and live stats (average, high roll, low roll, turns) update as each team rolls, so nobody tallies by hand.",
    tech: ["HTML5", "CSS3", "JavaScript", "Game logic"],
    image: "images/dice-game.svg",
    liveUrl: "projects/dice-game.html",
    featured: true
  }
];