// Allow the DOM to be loaded before starting the game
// This line of code is adopted from JS workthrough project
document.addEventListener("DOMContentLoaded", function () {
    // Declare inputs to the game, connect them to the DOM where appropriate
    let players = Array.from(document.getElementsByClassName('players'));
    let Spots = Array.from(document.getElementsByClassName('spot'));
    let playingSpots = Array(Spots.length).fill(null);
    let roundReset = document.getElementById('round-reset');
    let gameReset = document.getElementById('game-reset');
    let resetMessage = document.getElementById('reset-message');
    let yesReset = document.getElementById('yes-reset');
    let noReset = document.getElementById('no-reset');
    let resultStorage = Array(0);
    let winnerFound;
    let secondPlayer;
    let listenedToCharacter;
    let listenedToUser;
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
            secondPlayer = playersDeclaration(firstPlayer);
            fillTheSpots(count, firstPlayer, secondPlayer, Spots, playingSpots, function (filledInSpots) {
                winnerFound = gameResultEvaluation(resultStorage, filledInSpots);
            });
        });
    }
    /**This function listens to the players buttons. Once either of the players clicked
     * it declares the first player character.
     */
    function startTheGame(players, aPlayerClickedEvent, callback) {
        let userListenerStorage = [];
        // Check which players buttons was fired
        players.forEach(function(player){
            let userListenerHandler = function () {
                if (!aPlayerClickedEvent) {
                    // Prevents any more player's selection
                    aPlayerClickedEvent = true;
                    callback(player.innerText);
                }
            };
            player.addEventListener('click', userListenerHandler);
            userListenerStorage.push(userListenerHandler);
        });
        listenedToUser = userListenerStorage;
    }
    /** This function declares the second player by observing the character of the first player
     * It also announce the character turn on the dashboard once, the first character is chosen
     */
    function playersDeclaration(firstPlayer) {
        let secondPlayer;
        firstPlayer === "O" ? secondPlayer = "X" : secondPlayer = "O";
        document.getElementById("dash-board").innerText = `It is ${firstPlayer}'s turn`;
        return secondPlayer;
    }
    /** This function fills in the spots with characters based on the player spot choice. It also views the 
     * the turn of the next player on the dash board. The game then pupulates an array with the characters 
     * with index represents the spot position in the game board
     */
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
    /** This function evaluates after each new filled spot if the winning condition is satidfied.
     * If true returen the winner, not contenue until a winner found or it is a draw when no more spots
     * are available 
     */
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
        return winnerFound;
    }
    /** This function is only activated  when the round result is a draw, it then view the announcement
     * in the dash board
     */
    function resultDrawAnnouncement() {
        document.getElementById("dash-board").innerText = `It is draw`;
    }
    /** This function does announce the round winner, calulate the score and view it on the score board */
    function resultWinnerAnnouncement(resultStorage, winner) {
        document.getElementById("dash-board").innerText = `${winner}'s won this round!`;
        resultStorage.push(winner);
        document.getElementById('counter-o').innerText = `Player O: ${resultStorage.filter(item => item === "O").length}`;
        document.getElementById('counter-x').innerText = `Player X: ${resultStorage.filter(item => item === "X").length}`;

        for (let i = 0; i < Spots.length; i++) {
            Spots[i].removeEventListener('click', listenedToCharacter[i]);
        }
    }
    /** This function resets the round and does not reset the scores*/
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
        secondPlayer = false;
        initiateTheGame();
    }
    /** This function is first check if a reset message prsentation is needed, if yes it then activates
     * the message activiation function, if not, no action.
     */
    function resetGameFunction() {
        if (typeof listenedToCharacter !== "object") {
            return;
        } else {
            resetMessageActivation();
            for (let i = 0; i < Spots.length; i++) {
                Spots[i].removeEventListener('click', listenedToCharacter[i]);
            }
            for (let i = 0; i < players.length; i++) {
                players[i].removeEventListener('click', listenedToUser[i]);
            }
        }
    }
    /**This function activates the modal reset message if the user wants to reset the game */
    function resetMessageActivation() {
        resetMessage.style.display = 'block';
        yesReset.addEventListener('click', resetTheGame);
        noReset.addEventListener('click', returnToGame);
    }
    /**This function will cancel the reset order of the user if the user chooses to not execute the reset
     * order */
    function returnToGame() {
        noReset.removeEventListener('click', returnToGame);
        resetMessage.style.display = 'none';
        if (!winnerFound) {
            for (let i = 0; i < Spots.length; i++) {
                Spots[i].addEventListener('click', listenedToCharacter[i]);
            }
            for (let i = 0; i < players.length; i++) {
                players[i].addEventListener('click', listenedToUser[i]);
            }
        }
        if (resultStorage.length !== 0) {
            for (let i = 0; i < Spots.length; i++) {
                Spots[i].removeEventListener('click', listenedToCharacter[i]);
            }
            for (let i = 0; i < players.length; i++) {
                players[i].removeEventListener('click', listenedToUser[i]);
            }
        }
        if (!secondPlayer) {
            for (let i = 0; i < Spots.length; i++) {
                Spots[i].removeEventListener('click', listenedToCharacter[i]);
            }
            for (let i = 0; i < players.length; i++) {
                players[i].removeEventListener('click', listenedToUser[i]);
            }
        }
        return;
    }
    /**If the user confirms the order of reset, this function will reset all the input data to its default status 
     * then it re initiates the game
     */
    function resetTheGame() {
        yesReset.removeEventListener('click', resetTheGame);
        for (let i = 0; i < Spots.length; i++) {
            Spots[i].removeEventListener('click', listenedToCharacter[i]);
            Spots[i].innerText = '';
        }
        for (let i = 0; i < players.length; i++) {
            players[i].removeEventListener('click', listenedToUser[i]);
        }
        resultStorage = Array(0);
        document.getElementById('counter-o').innerText = `Player O: ${resultStorage.filter(item => item === "O").length}`;
        document.getElementById('counter-x').innerText = `Player X: ${resultStorage.filter(item => item === "X").length}`;
        document.getElementById("dash-board").innerText = "Choose a character to start!";
        playingSpots.fill(null);
        resetMessage.style.display = 'none';
        secondPlayer = false;
        // re initiate the game on the default inputs
        initiateTheGame();
    }
});