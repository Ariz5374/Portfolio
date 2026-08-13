let games_list = document.getElementById("rslt");
let game_name = document.getElementById("userInput");
let game_genre = document.getElementById("userInput2");
let game_img = document.getElementById("userInput3");
let add_game_btn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");

let games = [
  {
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/ru/archive/f/f4/20221114192239%21Minecraft_Cover_Art.png",

    name: "Minecraft",
    genre: "Sandbox",
  },
  {
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq8whNqJ1TiijEOXbcKhZU1SHbt6NR5D3Pbl42T0n-YWOnKQT51Mmlq8&s=10",

    name: "Devil May Cry",
    genre: "Action-Adeventure",
  },
  {
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQC5kquY7awfDYBE4_csoBTesRESDmYfD5FmZFpTixRkSZ-2apJ9ydW1JH&s=10",

    name: "Elden Ring",
    genre: "RPG",
  },
];

let renderGames = () => {
  games_list.innerHTML = "";
  if (games.length === 0) {
    games_list.innerHTML = "<h3>No Games added yet </h3>";
    return;
  }
  games.forEach((game) => {
    let card = `<div>
    <div class="cover">

    <div class="game-card">
   
   <img src="${game.thumbnail}" width=200>
   <h2>${game.name}</h2>
   <p> Genre: ${game.genre}</p>
    <button class="play-btn">▶ PLAY</button>
   </div>
   <hr>
   
   `;
    games_list.innerHTML += card;
  });
};
renderGames();
let addGames = () => {
  if (!game_name.value.trim() || !game_genre.value.trim()) {
    return;
  }
  let gameObj = {
    thumbnail: game_img.value || "https://placehold.co/200x250?text=No+Image",
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
