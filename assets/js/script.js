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

    initiateTheGame(); // Game is loaded and is waiting the user to choose either of the players to strart the game with

    /**This function initiate the Game once the DOM is loaded.
     * It waits then the user to click on one of the users to start the game.
     */
    function initiateTheGame() {

        // aPlayerClickedEvent variable is a gating mechanismim to prevent new player selection
        let aPlayerClickedEvent = false;

        startTheGame(players,aPlayerClickedEvent, function(firstPlayer) {

        });

    }
    /**This function listens to the players buttons. Once either of the players clicked
     * it declars the first player character.
     */
    function startTheGame(players,aPlayerClickedEvent, callback) {
        // Check which players buttons was fired
        for (let i = 0; i < players.length; i++) {
            players[i].addEventListener('click', function() {
                if (!aPlayerClickedEvent) {
                    // Prevents any more player's selection
                    aPlayerClickedEvent = true;
                    console.log(players[i].innerText)
                }
            });
        }
    }

    function playersDeclaration(){

    }

    function fillTheSpots() {

    }

    function gameResultEvaluation() {

    }

    function resultAnnoucement() {

    }

    function counterEvaluator() {

    }

    function resetRoundFunction() {

    }

    function resetGameFunction() {

    }
});