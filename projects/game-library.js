let games_list = document.getElementById("rslt");
let game_name = document.getElementById("userInput");
let game_genre = document.getElementById("userInput2");
let game_img = document.getElementById("userInput3");
let add_game_btn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");

let games = [
  {
    thumbnail: "../images/cover-minecraft.svg",

    name: "Minecraft",
    genre: "Sandbox",
  },
  {
    thumbnail: "../images/cover-devil-may-cry.svg",

    name: "Devil May Cry",
    genre: "Action-Adventure",
  },
  {
    thumbnail: "../images/cover-elden-ring.svg",

    name: "Elden Ring",
    genre: "RPG",
  },
];

const FALLBACK_COVER = "https://placehold.co/200x250?text=No+Image";

// Escape user input so typed text can never inject HTML
let escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[ch]));

let renderGames = () => {
  if (games.length === 0) {
    games_list.innerHTML = "<h3>No games added yet</h3>";
    return;
  }
  games_list.innerHTML = games
    .map(
      (game) => `
    <div class="cover">
      <div class="game-card">
        <img src="${escapeHTML(game.thumbnail)}" alt="${escapeHTML(game.name)} cover" width="200"
          onerror="this.onerror=null;this.src='../images/game-library.svg'">
        <h2>${escapeHTML(game.name)}</h2>
        <p>Genre: ${escapeHTML(game.genre)}</p>
        <button class="play-btn">▶ PLAY</button>
      </div>
      <hr>
    </div>`
    )
    .join("");
};
renderGames();
let addGames = () => {
  if (!game_name.value.trim() || !game_genre.value.trim()) {
    return;
  }
  let gameObj = {
    thumbnail: game_img.value.trim() || FALLBACK_COVER,
    name: game_name.value,
    genre: game_genre.value,
  };
  games.push(gameObj);

  renderGames();
  game_name.value = "";
  game_genre.value = "";
  game_img.value = "";

  game_name.focus();
};

add_game_btn.addEventListener("click", addGames);
