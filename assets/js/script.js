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

    // Add event listener to the resets buttons
    roundReset.addEventListener('click', resetRoundFunction);
    gameReset.addEventListener('click', resetGameFunction);

    initiateTheGame(); // Game is loaded and is waiting the user to choose either of the players to strart the game with

    /**This function initiate the Game once the DOM is loaded.
     * It waits then the user to click on one of the users to start the game.
     */
    function initiateTheGame() {

        // aPlayerClickedEvent variable is a gating mechanismim to prevent new player selection
        let aPlayerClickedEvent = false;
        let count = -1; // Used to count the number of clicks when the filltheSpots function is called
        startTheGame(players, aPlayerClickedEvent, function (firstPlayer) {
            let secondPlayer = playersDeclaration(firstPlayer);
            fillTheSpots(count, firstPlayer, secondPlayer, Spots, playingSpots, function (filledInSpots) {

            });
        });

    }
    /**This function listens to the players buttons. Once either of the players clicked
     * it declars the first player character.
     */
    function startTheGame(players, aPlayerClickedEvent, callback) {
        // Check which players buttons was fired
        for (let i = 0; i < players.length; i++) {
            players[i].addEventListener('click', function () {
                if (!aPlayerClickedEvent) {
                    // Prevents any more player's selection
                    aPlayerClickedEvent = true;
                    callback(players[i].innerText)
                }
            });
        }
    }
    /** This function declare the second player by observing the charactor of the first player
     * It also announce the character turn on the dashboard once, the first charater is choosen
     */
    function playersDeclaration(firstPlayer) {
        // if O character is clicked, then O is the first player and X is the second player and vise versa
        firstPlayer === "O" ? secondPlayer = "X" : secondPlayer = "O";
        document.getElementById("dash-board").innerText = `It is ${firstPlayer}'s turn`;
        return secondPlayer
    }

    function fillTheSpots(count, firstPlayer, secondPlayer, gameSpots, playingSpots, callback) {
        console.log(count);

        // declare an array of 
        let listenerStorage = [];

        for (let i = 0; i < Spots.length; i++) {
            let filledInSpotsListener = function () {
                count++;

                if (count % 2 === 0 && !playingSpots[i]) {
                    Spots[i].innerText = `${firstPlayer}`;
                    playingSpots[i] = firstPlayer;
                    document.getElementById("dash-board").innerText = `It is ${secondPlayer}'s turn`;

                } else if (count % 2 !== 0 && !playingSpots[i]) {
                    Spots[i].innerText = `${secondPlayer}`;
                    playingSpots[i] = secondPlayer;
                    document.getElementById("dash-board").innerText = `It is ${firstPlayer}'s turn`;
                }
                callback(playingSpots);
            };


            Spots[i].addEventListener('click', filledInSpotsListener);
            listenerStorage.push(filledInSpotsListener);
        }
        listenedToCharactor = listenerStorage;
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

        // Reset all the manupulated inputs to their defult conditions
        for (let i = 0; i < Spots.length; i++) {
            // Remove event listeners
            Spots[i].removeEventListener('click', listenedToCharactor[i]);
            Spots[i].innerText = '';
        }
        document.getElementById("dash-board").innerText = "Choose either of the character to start the game!";
        playingSpots.fill(null)
        alert("The game is reset")
        // re initiate the game on the default inputs
        initiateTheGame();

    }
});