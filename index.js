
var board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

var numToAdd;

window.onload = function () {
    makeBoard();
};

var index1;
var index2;
var fault1;
var fault2;
var fault3;
var isSolved = false;



function makeBoard() {
    emptyBoard();
    let id = 0;
    for (let i = 0; i < 81; i++) {
        const idnum = String(i);
        let square = document.createElement("p");
        square.textContent = '';
        square.classList.add("square");
        square.id = idnum;


        if (i >= 0 && i < 9) { square.classList.add("borderTop"); }

        if (i >= 72 && i <= 81) { square.classList.add("borderBottom"); }   // This section is entirely built to give the dark bold borders to the sudoku game

        if ((i + 1) % 9 == 0) { square.classList.add("borderRight"); }

        if (i % 9 == 0) { square.classList.add("borderLeft"); }

        if ((id > 17 && id < 27) || (id > 44 && id < 54)) { square.classList.add("borderBottom"); }

        if ((id + 1) % 9 == 3 || (id + 1) % 9 == 6) { square.classList.add("borderRight"); }

        id++;

        funcId("board").appendChild(square);




    }

};

function funcId(id) {
    return document.getElementById(id);
}

function emptyBoard() {
    let squares = document.querySelectorAll(".square");
    for (let i = 0; i < squares.length; i++) {
        squares[i].remove();
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            board[i][j] = 0;
        }
    }

    fault1 = 0;
    fault2 = 0;
    fault3 = 0;
    isSolved = false;
}




