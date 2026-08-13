let total_number_1 = document.getElementById("total_number_1");
let total_number_2 = document.getElementById("total_number_2");

let dice_1 = document.getElementById("dice_1");
let dice_2 = document.getElementById("dice_2");

let average_1 = document.getElementById("average_1");
let average_2 = document.getElementById("average_2");

let highest_1 = document.getElementById("highest_1");
let highest_2 = document.getElementById("highest_2");

let lowest_1 = document.getElementById("lowest_1");
let lowest_2 = document.getElementById("lowest_2");

let teamA_turns = document.getElementById("teamA_turns");
let teamB_turns = document.getElementById("teamB_turns");

let roll_dice_1 = document.getElementById("roll_dice_1");
let roll_dice_2 = document.getElementById("roll_dice_2");

let banner = document.getElementById("banner");
let reset_btn = document.getElementById("reset_btn");

let turn = "A";

let high1 = 0;
let high2 = 0;

let low1 = 13;
let low2 = 13;

roll_dice_2.disabled = true;
reset_btn.hidden = true;

function generateNumber() {
    return Math.ceil(Math.random() * 12);
}

function checkWinner() {

    let total1 = Number(total_number_1.innerHTML);
    let total2 = Number(total_number_2.innerHTML);

    if (total1 >= 60) {
        banner.innerHTML = "Team A Wins!";
        roll_dice_1.disabled = true;
        roll_dice_2.disabled = true;
        reset_btn.hidden = false;
    }

    if (total2 >= 60) {
        banner.innerHTML = "Team B Wins!";
        roll_dice_1.disabled = true;
        roll_dice_2.disabled = true;
        reset_btn.hidden = false;
    }
}

function rollDice() {

    let dice = generateNumber();

    if (turn == "A") {

        dice_1.innerHTML = dice;

        let points = dice;

        if (dice == 6) {
            points = dice * 2;
            banner.innerHTML = "Double Points for Team A!";
        }
        else {
            banner.innerHTML = "";
        }

        let total = Number(total_number_1.innerHTML);
        total = total + points;
        total_number_1.innerHTML = total;

        let turns = Number(teamA_turns.innerHTML);
        turns++;
        teamA_turns.innerHTML = turns;

        average_1.innerHTML = (total / turns).toFixed(2);

        if (dice > high1) {
            high1 = dice;
        }

        if (dice < low1) {
            low1 = dice;
        }

        highest_1.innerHTML = high1;
        lowest_1.innerHTML = low1;

        checkWinner();

        if (total < 60) {
            turn = "B";
            roll_dice_1.disabled = true;
            roll_dice_2.disabled = false;
        }

    }

    else {

        dice_2.innerHTML = dice;

        let points = dice;

        if (dice == 6) {
            points = dice * 2;
            banner.innerHTML = "Double Points for Team B!";
        }
        else {
            banner.innerHTML = "";
        }

        let total = Number(total_number_2.innerHTML);
        total = total + points;
        total_number_2.innerHTML = total;

        let turns = Number(teamB_turns.innerHTML);
        turns++;
        teamB_turns.innerHTML = turns;

        average_2.innerHTML = (total / turns).toFixed(2);

        if (dice > high2) {
            high2 = dice;
        }

        if (dice < low2) {
            low2 = dice;
        }

        highest_2.innerHTML = high2;
        lowest_2.innerHTML = low2;

        checkWinner();

        if (total < 60) {
            turn = "A";
            roll_dice_2.disabled = true;
            roll_dice_1.disabled = false;
        }
    }
}

function resetGame() {

    total_number_1.innerHTML = 0;
    total_number_2.innerHTML = 0;

    dice_1.innerHTML = "-";
    dice_2.innerHTML = "-";

    average_1.innerHTML = "0.00";
    average_2.innerHTML = "0.00";

    highest_1.innerHTML = 0;
    highest_2.innerHTML = 0;

    lowest_1.innerHTML = 0;
    lowest_2.innerHTML = 0;

    teamA_turns.innerHTML = 0;
    teamB_turns.innerHTML = 0;

    high1 = 0;
    high2 = 0;

    low1 = 13;
    low2 = 13;

    banner.innerHTML = "";

    turn = "A";

    roll_dice_1.disabled = false;
    roll_dice_2.disabled = true;

    reset_btn.hidden = true;
}

roll_dice_1.addEventListener("click", rollDice);
roll_dice_2.addEventListener("click", rollDice);
reset_btn.addEventListener("click", resetGame);