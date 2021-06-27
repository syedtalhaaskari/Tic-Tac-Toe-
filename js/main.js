import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => {
    onRestartClick()
})

document.querySelector(".play").addEventListener("click", () => {
    onPlayClick()
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach(tile => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i) {
    game.makeMove(i);
    gameView.updateBoard(game);
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game)
    document.querySelector(".choose-color").style.setProperty("display", "flex");
    document.querySelector(".game").style.setProperty("display", "none");
}

function onPlayClick() {
    document.querySelector(".choose-color").style.setProperty("display", "none");
    document.querySelector(".game").style.setProperty("display", "flex");
}

gameView.updateBoard(game);