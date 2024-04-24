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
        let aPlayerClickedEvent = false; // This line is intorduced in this position by the author, the original suggestion of ChatGPT is to be declared within startTheGame function
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
        let userListenerStorage = []; // This line is introduced by the author after being inspired by GPT solution suggested in the fillInSpots function
        // Check which players buttons was fired
        players.forEach(function (player) { // initially was for loop, this led to jshint warning. the solution to warning  is adapted from https://github.com/dnlbowers/blackjack
            let userListenerHandler = function () { // This line is introduced by the author after being inspired by GPT solution suggested in the fillInSpots function
                if (!aPlayerClickedEvent) {
                    // Prevents any more player's selection
                    aPlayerClickedEvent = true; // This line is suggested by ChatGPT
                    callback(player.innerText);
                }
            };
            player.addEventListener('click', userListenerHandler); // This line is introduced by the author after being inspired by GPT solution suggested in the fillInSpots function
            userListenerStorage.push(userListenerHandler); // This line is introduced by the author after being inspired by GPT solution suggested in the fillInSpots function
        });
        listenedToUser = userListenerStorage; // This line is introduced by the author after being inspired by GPT solution suggested in the fillInSpots function
    }
    /** This function declares the second player by observing the character of the first player
     * It also announce the character turn on the dashboard once, the first character is chosen
     */
    function playersDeclaration(firstPlayer) {
        let secondPlayer;
        if (firstPlayer === "O") {
            secondPlayer = "X";
        } else {
            secondPlayer = "O";
        } document.getElementById("dash-board").innerText = `It is ${firstPlayer}'s turn`;
        return secondPlayer;
    }
    /** This function fills in the spots with characters based on the player spot choice. It also views the 
     * the turn of the next player on the dash board. The game then pupulates an array with the characters 
     * with index represents the spot position in the game board
     */
    function fillTheSpots(count, firstPlayer, secondPlayer, Spots, playingSpots, callback) {
        let listenerStorage = []; // This line is suggested by ChatGPT

        Spots.forEach(function(spot, index){ // initially was for loop, this led to jshint warning. 
            // The solution to the warning is in this case from https://www.freecodecamp.org/ (JavaScript forEach() – JS Array For Each Loop Example) 
            // and from https://github.com/dnlbowers/blackjack
            let filledInSpotsListener = function () { // This line is suggested by ChatGPT
                count++;
                if (count % 2 === 0 && !playingSpots[index]) {
                    Spots[index].innerText = `${firstPlayer}`;
                    playingSpots[index] = firstPlayer;
                    document.getElementById("dash-board").innerText = `It is ${secondPlayer}'s turn`;
                } else if (count % 2 !== 0 && !playingSpots[index]) {
                    Spots[index].innerText = `${secondPlayer}`;
                    playingSpots[index] = secondPlayer;
                    document.getElementById("dash-board").innerText = `It is ${firstPlayer}'s turn`;
                }
                callback(playingSpots);
            };
            spot.addEventListener('click', filledInSpotsListener, {once : true}); // This line is suggested by ChatGPT
            listenerStorage.push(filledInSpotsListener); // This line is suggested by ChatGPT
        });
        listenedToCharacter = listenerStorage; // This line is suggested by ChatGPT
    }
    /** This function evaluates after each new filled spot if the winning condition is satidfied.
     * If true returen the winner, not contenue until a winner found or it is a draw when no more spots
     * are available 
     */
    function gameResultEvaluation(resultStorage, filledInSpots) {
        let winner;
        let winnerFound = false;
        const winningCombinations = [ // This line is common knowledge, appears in many similar Tic Tac Toe computer games
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
            let [a, b, c] = winningCombinations[i]; // This line is adapted from https://www.youtube.com/watch?v=oZrp3Atkz18
            let winningConditon = (filledInSpots[a] !== null && (filledInSpots[a] === filledInSpots[b] && filledInSpots[a] === filledInSpots[c])); // This line is adapted from https://www.youtube.com/watch?v=oZrp3Atkz18
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
        document.getElementById('counter-o').innerText = resultStorage.filter(item => item === "O").length;
        document.getElementById('counter-x').innerText = resultStorage.filter(item => item === "X").length;

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
    /** This function is first check if a reset message activation is needed, if yes it then activates
     * the message activiation function, if not, no action.
     */
    function resetGameFunction() {
        let resetMessageActivationCondition = playingSpots.filter(item => item === null).length === playingSpots.length && document.getElementById('counter-o').innerText === "0" && document.getElementById('counter-x').innerText === "0";
        if (typeof listenedToCharacter !== "object") {
            return;
        } else if (resetMessageActivationCondition) {
            return
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
        if (secondPlayer && playingSpots.filter(item => item === null).length === playingSpots.length) {
            for (let i = 0; i < Spots.length; i++) {
                Spots[i].addEventListener('click', listenedToCharacter[i]);
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
                players[i].addEventListener('click', listenedToUser[i]);
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
        document.getElementById('counter-o').innerText = resultStorage.filter(item => item === "O").length;
        document.getElementById('counter-x').innerText = resultStorage.filter(item => item === "X").length;
        document.getElementById("dash-board").innerText = "Choose a character to start!";
        playingSpots.fill(null);
        resetMessage.style.display = 'none';
        secondPlayer = false;
        // re initiate the game on the default inputs
        initiateTheGame();
    }
});