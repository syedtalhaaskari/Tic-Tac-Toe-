export default class GameView {
    constructor() {
    }

    updateBoard(game) {
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinations();
        for (let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);

            tile.classList.remove("tile-winner")

            let tileType = game.board[i] == "X" ? "tile-x" : "tile-o"
            
            // tile.textContent = game.board[i];
            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`
            console.log(game)
            if (winningCombination && winningCombination.includes(i)) {
                tile.classList.add("tile-winner");
                let win = document.querySelector(".game-winner")
                win.style.setProperty("display", "flex")
                win.innerHTML = `
                    Player ${game.turn} is the winner
                `
            }
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-X")
        let playerO = document.querySelector(".player-O")
        playerX.classList.remove("active")
        playerO.classList.remove("active")

        if (game.turn == "X") {
            playerX.classList.add("active")
        } else {
            playerO.classList.add("active")
        }
    }
}
