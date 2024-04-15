console.clear()
// Allow the DOM to be loaded before starting the game
// This line of code is adopted from JS workthrough project
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page is loaded")

    // Declare inputs to the game, connect them to the DOM where approperiate
    let players = Array.from(document.getElementsByClassName('players')); // Convert to an array
    let Spots = Array.from(document.getElementsByClassName('spot')); // Convert to an array
    let playingSpots = Array(Spots.length).fill(null); // Create an empty
    let roundReset = document.getElementById('round-reset'); // declare a round reset variable
    let gameReset = document.getElementById('game-reset'); // declare a resut button variable
})