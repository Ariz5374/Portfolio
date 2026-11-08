/*
 * Project data lives here. Edit this file to add, update, or hide a project.
 * The homepage and Work page both read this array automatically.
 */
const projects = [
  {
    number: "01",
    category: "INTERACTIVE TOOL",
    title: "Game Library",
    tagline: "A browsable collection for organizing game titles, covers and genres.",
    problem: "Game collections can become difficult to browse when titles and categories are kept in scattered lists.",
    decision: "Used an array of game objects and JavaScript rendering to create the collection dynamically.",
    learned: "Rendering from one array keeps data and screen in sync, and anything a user types must be escaped before it goes into HTML.",
    tech: ["HTML5", "CSS3", "JavaScript", "ES6+"],
    image: "images/game-library.svg",
    liveUrl: "projects/game-library.html",
    featured: true
  },
  {
    number: "02",
    category: "API INTEGRATION",
    title: "Storefront",
    tagline: "A product catalog that retrieves data and makes it easier to explore.",
    problem: "A product catalog needs a clear way to display items and help visitors narrow their choices.",
    decision: "Connected the Fake Store API and used JavaScript to render products, filter categories and show product details.",
    learned: "Network requests fail, so every fetch needs loading and error states, not just the happy path.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
    image: "images/storefront.svg",
    liveUrl: "projects/storefront.html",
    featured: true
  },
  {
    number: "03",
    category: "PRODUCTIVITY TOOL",
    title: "Expense Tracker",
    tagline: "A simple way to record transactions and keep a running financial summary.",
    problem: "Tracking income and spending requires a clear transaction history and accurate totals.",
    decision: "Used localStorage to retain transactions in the browser and JavaScript to calculate the balance.",
    learned: "Saved data has to be rebuilt into totals every time the page loads, so the calculation lives in one function.",
    tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    image: "images/expense-tracker.svg",
    liveUrl: "projects/expense-tracker.html",
    featured: true
  },
  {
    number: "04",
    category: "JAVASCRIPT EXPERIMENT",
    title: "Arcane Password Analyzer",
    tagline: "Live feedback that checks a password against a set of requirements.",
    problem: "Password requirements are easier to understand when feedback appears while typing.",
    decision: "Combined regular expressions and input events to evaluate requirements and update the interface in real time.",
    learned: "A regular expression turns each rule into a one-line test, and input events keep the feedback live.",
    tech: ["HTML5", "CSS3", "JavaScript", "Regex"],
    image: "images/arcane-password-analyzer.svg",
    liveUrl: "projects/arcane-password-analyzer.html",
    featured: true
  },
  {
    number: "05",
    category: "GAME LOGIC",
    title: "Dice Game",
    tagline: "A two-player game with turn management, scoring and a winning condition.",
    problem: "Keeping track of turns and scores manually can interrupt the flow of a simple game.",
    decision: "Used conditional logic and DOM updates to manage turns, calculate scores and detect the winner.",
    learned: "Turn order, scoring and the win check depend on each other, so I learned to split the logic into small steps.",
    tech: ["HTML5", "CSS3", "JavaScript", "Game Logic"],
    image: "images/dice-game.svg",
    liveUrl: "projects/dice-game.html",
    featured: true
  }
];
