let turn = 0;
let cellNumber = 0

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
        



//     draw() {
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
