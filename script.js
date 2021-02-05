let turn = 0;
let cellNumber = 0;

let fullboard = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

class Box {
    constructor() {
        this.x = null;
        this.o = null;
        this.pointerEvents = false;
    }
    draw(x) {
        let div = document.createElement('div');
        div.classList.add('small-box');
        document.body.querySelector('.game-box').append(div);
        let table = document.createElement('table');
        div.append(table);
        for (let i = 0; i < 3; i++) {
            let tr = document.createElement('tr');
            table.append(tr);
            for (let j = 0; j < 3; j++) {
                new Cell(tr).draw();
            }
        }
    }
}
class Cell {
    constructor(row) {
        this.x = null;
        this.o = null;
        this.row = row;
    }
    draw() {
        let td = document.createElement('td');
        td.setAttribute('id', cellNumber);
        cellNumber++;
        td.onclick = function (e) {
            turn++;
            this.innerHTML = turn % 2 ? 'X' : 'O';
            fullboard[e.target.id] = turn % 2 ? 'X' : 'O';

        };
        this.row.append(td);
    }
}
for (i = 1; i < 10; i++) {
    new Box().draw(i);
}


class Cell {
    constructor() {
        this.x = null
        this.o = null
    }
    draw() {
        let td = document.createElement("td")
        console.log(td)
        td.onclick = function () {
            this.innerHTML = 'hi'
        }
        document.querySelector("body").append(td)
    }
}
for (let i = 0; i < 50; i++) {
    new Cell().draw()
// }
// 11:56
// @ -1,101 +1,118 @@
// /*
// /**
//  * Tic Tac Toe
//  *
//  * A Tic Tac Toe game in HTML/JavaScript/CSS.
//  *
//  * No dependencies - Uses Vanilla JS
//  *
//  * @author: Vasanth Krishnamoorthy
//  */
// $(function () {
// var N_SIZE = 3,
//   EMPTY = '&nbsp;',
//   boxes = [],
//   turn = 'X',
//   score,
//   moves;
// 	var N_SIZE = 3,
// 		EMPTY = "&nbsp;",
// 		boxes = [],
// 		turn = "X",
// 		score,
// 		moves;
// /**
//  * Initializes the Tic Tac Toe board and starts the game.
//  */
// function init() {
//   var board = document.createElement('table');
//   board.setAttribute('border', 1);
//   board.setAttribute('cellspacing', 0);
// 	/*
// 	 * Initializes the Tic Tac Toe board and starts the game.
// 	 */
// 	function init() {
// 		var board = $("<table border=1 cellspacing=0>"),
// 			identifier = 1;
// 		for (var i = 0; i < N_SIZE; i++) {
// 			var row = $("<tr>");
// 			board.append(row);
// 			for (var j = 0; j < N_SIZE; j++) {
// 				var cell = $("<td height=120 width=120 align=center valign=center></td>");
// 				cell.addClass('col' + j).addClass('row' + i);
// 				if (i == j) {
// 					cell.addClass('diagonal0');
// 				}
// 				if (j == N_SIZE - i - 1) {
// 					cell.addClass('diagonal1');
// 				}
// 				cell[0].identifier = identifier;
// 				cell.click(set);
// 				row.append(cell);
// 				boxes.push(cell);
// 				identifier += identifier;
// 			}
// 		}
//   var identifier = 1;
//   for (var i = 0; i < N_SIZE; i++) {
//     var row = document.createElement('tr');
//     board.appendChild(row);
//     for (var j = 0; j < N_SIZE; j++) {
//       var cell = document.createElement('td');
//       cell.setAttribute('height', 120);
//       cell.setAttribute('width', 120);
//       cell.setAttribute('align', 'center');
//       cell.setAttribute('valign', 'center');
//       cell.classList.add('col' + j, 'row' + i);
//       if (i == j) {
//         cell.classList.add('diagonal0');
//       }
//       if (j == N_SIZE - i - 1) {
//         cell.classList.add('diagonal1');
//       }
//       cell.identifier = identifier;
//       cell.addEventListener('click', set);
//       row.appendChild(cell);
//       boxes.push(cell);
//       identifier += identifier;
//     }
//   }
// 		$(document.getElementById("tictactoe") || document.body).append(board);
// 		startNewGame();
// 	}
//   document.getElementById('tictactoe').appendChild(board);
//   startNewGame();
// }
// 	/*
// 	 * New game
// 	 */
// 	function startNewGame() {
// 		score = {
// 			"X": 0,
// 			"O": 0
// 		};
// 		moves = 0;
// 		turn = "X";
// 		boxes.forEach(function (square) {
// 			square.html(EMPTY);
// 		});
// 	}
// /**
//  * New game
//  */
// function startNewGame() {
//   score = {
//     'X': 0,
//     'O': 0
//   };
//   moves = 0;
//   turn = 'X';
//   boxes.forEach(function (square) {
//     square.innerHTML = EMPTY;
//   });
// }
// 	/*
// 	 * Check if a win or not
// 	 */
// 	function win(clicked) {
// 		// Get all cell classes
// 		var memberOf = clicked[0].className.split(/\s+/);
// 		for (var i = 0; i < memberOf.length; i++) {
// 			var testClass = '.' + memberOf[i];
// 			// winning condition: turn == N_SIZE,
// 			if ($('#tictactoe').find(testClass + ':contains(' + turn + ')').length == N_SIZE) {
// 				return true;
// 			}
// 		}
// 		return false;
// 	}
// /**
//  * Check if a win or not
//  */
// function win(clicked) {
//   // Get all cell classes
//   var memberOf = clicked.className.split(/\s+/);
//   for (var i = 0; i < memberOf.length; i++) {
//     var testClass = '.' + memberOf[i];
//     var items = contains('#tictactoe ' + testClass, turn);
//     // winning condition: turn == N_SIZE
//     if (items.length == N_SIZE) {
//       return true;
//     }
//   }
//   return false;
// }
// 	/*
// 	 * Sets clicked square and also updates the turn.
// 	 */
// 	function set() {
// 		if ($(this).html() !== EMPTY) {
// 			return;
// 		}
// 		$(this).html(turn);
// 		moves += 1;
// 		score[turn] += $(this)[0].identifier;
// 		if (win($(this))) {
// 			alert('Winner: Player ' + turn);
// 			startNewGame();
// 		} else if (moves === N_SIZE * N_SIZE) {
// 			alert("Draw");
// 			startNewGame();
// 		} else {
// 			turn = turn === "X" ? "O" : "X";
// 			$('#turn').text('Player ' + turn);
// 		}
// 	}
// /**
//  * Helper function to check if NodeList from selector has a particular text
//  */
// function contains(selector, text) {
//   var elements = document.querySelectorAll(selector);
//   return [].filter.call(elements, function (element) {
//     return RegExp(text).test(element.textContent);
//   });
// }
// /**
//  * Sets clicked square and also updates the turn.
//  */
// function set() {
//   if (this.innerHTML !== EMPTY) {
//     return;
//   }
//   this.innerHTML = turn;
//   moves += 1;
//   score[turn] += this.identifier;
//   if (win(this)) {
//     alert('Winner: Player ' + turn);
//     startNewGame();
//   } else if (moves === N_SIZE * N_SIZE) {
//     alert('Draw');
//     startNewGame();
//   } else {
//     turn = turn === 'X' ? 'O' : 'X';
//     document.getElementById('turn').textContent = 'Player ' + turn;
//   }
// }
// 	init();
// });
// init(); 






















// class Box {
//     constructor(rowNum) {
//         this.x = null
//         this.o = null

//     }
//     draw() {
//         let td = document.createElement("td")
//         console.log(td)

//         td.onclick = function () {
//             this.innerHTML = 'hi'
//         }

        // document.querySelector("body").append(td)

        // let turn = 0;

// class Box {
//     constructor(rowNum) {
//         this.x = null
//                 this.o = null
//                 this.rowNum = rowNum
//                 this.pointerEvents = false;
//             }
//             // draw(x) {
//             //     let div = document.createElement('div')
//             //     div.classList.add('small-box')
//             //     document.body.querySelector('.game-box').append(div)

//             //     let table = document.createElement('table')
//             //     div.append(table)
//             //     for (let i = 1; i < 4; i++) {
//             //         let tr = document.createElement('tr')
//             //         table.append(tr)
//             //         for (let j = 1; j < 4; j++) {
//             //             new Cell(tr, i, j, this.rowNum).draw()
//             //         }

//             //     }

//             // }


// //     draw() {
//         let td = document.createElement("td")
//         td.setAttribute('id', cellNumber)
//         cellNumber++
//         td.onclick = function (e) {
//             turn++
//             this.innerHTML = turn % 2 ? 'X' : 'O'
//             fullboard[e.target.id] = turn % 2 ? 'X' : 'O'
//             console.log(e.target.id)
//             console.log(fullboard)
//         }
//         // this.row.append(td)
//     }
// }
// console.log("hi")

// for (i = 1; i < 10; i++) {
//     new Box(i).draw(i)
// }