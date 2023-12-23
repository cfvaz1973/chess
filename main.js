let legalSquares = [];
const boardSquares = document.getElementsByClassName("squares");
const pieces = document.getElementsByClassName("piece");
const piecesImages = document.getElementsByTagName("img");

// This function sets up the event listeners and IDs for the squares on the chess board.
// It loops through an array of boardSquares and for each square, it adds an event listener for the dragover and drop events,
// calling the allowDrop and deop functions respectively when those events are triggered
// The function also calculates the row and column for each square and assigns an ID to the square in the format
// column + row, where column is a letter from 'a' to 'h' and row is a number from 1 to 8.
function setBoardSquares() {
    for (let i = 0; i < boardSquares.length; i++) {
        boardSquares[i].addEventListener("dragover", allowDrop);
        boardSquares[i].addEventListener("drop", drop);
        let row = 8 - Math.floor(i / 8);
        let column = String.fromCharCode(97 + (i % 8));
        let square=boardSquares[i];
        square.id=column+row;
    }
}
