console.clear();
// Allow the DOM to be loaded before starting the game
// This line of code is adopted from JS workthrough project
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page is loaded");
    // Declare inputs to the game, connect them to the DOM where appropriate
    let players = Array.from(document.getElementsByClassName('players'));
    let Spots = Array.from(document.getElementsByClassName('spot'));
    let playingSpots = Array(Spots.length).fill(null);
    let roundReset = document.getElementById('round-reset');
    let gameReset = document.getElementById('game-reset');
    let resultStorage = Array(0);

    roundReset.addEventListener('click', resetRoundFunction);
    gameReset.addEventListener('click', resetGameFunction);

    initiateTheGame();

    /**This function initiate the Game once the DOM is loaded.
     * It waits then the user to click on one of the users to start the game.
     */
    function initiateTheGame() {
        // aPlayerClickedEvent variable is a gating mechanism to prevent new player selection
        let aPlayerClickedEvent = false;
        let count = -1; // Used to count the number of clicks when the filltheSpots function is called
        startTheGame(players, aPlayerClickedEvent, function (firstPlayer) {
            let secondPlayer = playersDeclaration(firstPlayer);
            fillTheSpots(count, firstPlayer, secondPlayer, Spots, playingSpots, function (filledInSpots) {
                gameResultEvaluation(resultStorage, filledInSpots);

            });
        });

    }

    /**This function listens to the players buttons. Once either of the players clicked
     * it declares the first player character.
     */
    function startTheGame(players, aPlayerClickedEvent, callback) {
        let userListenerStorage = [];
        // Check which players buttons was fired
        for (let i = 0; i < players.length; i++) {
            let userListenerHandler = function () {
                if (!aPlayerClickedEvent) {
                    // Prevents any more player's selection
                    aPlayerClickedEvent = true;
                    callback(players[i].innerText);
                }
            };
            players[i].addEventListener('click', userListenerHandler);
            userListenerStorage.push(userListenerHandler);
        }
        listenedToUser = userListenerStorage;
    }

    /** This function declares the second player by observing the character of the first player
     * It also announce the character turn on the dashboard once, the first character is chosen
     */
    function playersDeclaration(firstPlayer) {
        let secondPlayer
        firstPlayer === "O" ? secondPlayer = "X" : secondPlayer = "O";
        document.getElementById("dash-board").innerText = `It is ${firstPlayer}'s turn`;
        return secondPlayer;
    }

    function fillTheSpots(count, firstPlayer, secondPlayer, Spots, playingSpots, callback) {
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
        listenedToCharacter = listenerStorage;
    }

    function gameResultEvaluation(resultStorage, filledInSpots) {
        let winner;
        let winnerFound = false;
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winningCombinations.length; i++) {
            let [a, b, c] = winningCombinations[i];
            let winningConditon = (filledInSpots[a] !== null && (filledInSpots[a] === filledInSpots[b] && filledInSpots[a] === filledInSpots[c]));
            if (winningConditon) {
                winner = filledInSpots[a];
                winnerFound = true;
                resultWinnerAnnouncement(resultStorage, winner);
            }
        }
        let drawCondition = filledInSpots.filter(item => item !== null).length === filledInSpots.length;
        if (!winnerFound && drawCondition) {
            resultDrawAnnouncement();
        }
    }

    function resultDrawAnnouncement() {
        document.getElementById("dash-board").innerText = `It is draw`;
    }

    function resultWinnerAnnouncement(resultStorage, winner) {
        document.getElementById("dash-board").innerText = `${winner}'s won this round!`;
        resultStorage.push(winner);
        document.getElementById('counter-o').innerText = `Player O: ${resultStorage.filter(item => item === "O").length}`;
        document.getElementById('counter-x').innerText = `Player X: ${resultStorage.filter(item => item === "X").length}`;

        for (let i = 0; i < Spots.length; i++) {
            Spots[i].removeEventListener('click', listenedToCharacter[i]);
        }
    }

    function resetRoundFunction() {
        if (typeof listenedToCharacter !== "object") {
            return;
        } else {
            for (let i = 0; i < Spots.length; i++) {
                Spots[i].removeEventListener('click', listenedToCharacter[i]);
                Spots[i].innerText = '';
            }
        }
        for (let i = 0; i < players.length; i++) {
            players[i].removeEventListener('click', listenedToUser[i]);
        }
        document.getElementById("dash-board").innerText = "Choose the first to start the round!";
        playingSpots.fill(null);
        initiateTheGame();
    }

    function resetGameFunction() {
        // Fix error when pressing reset before selecting either of the characters
        if (typeof listenedToCharacter !== "object") {
            return
        } else {
            for (let i = 0; i < Spots.length; i++) {
                Spots[i].removeEventListener('click', listenedToCharacter[i]);
                Spots[i].innerText = '';
            }
        }
        for (let i = 0; i < players.length; i++) {
            players[i].removeEventListener('click', listenedToUser[i]);
        }
        resultStorage = Array(0);
        document.getElementById('counter-o').innerText = `Player O: ${resultStorage.filter(item => item === "O").length}`;
        document.getElementById('counter-x').innerText = `Player X: ${resultStorage.filter(item => item === "X").length}`;
        document.getElementById("dash-board").innerText = "Choose a character to start!";
        playingSpots.fill(null);
        alert("The game is reset");
        // re initiate the game on the default inputs
        initiateTheGame();
    }
});