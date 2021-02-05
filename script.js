let turn = 0;
let cellNumber = 0
let boxNumber = 0
let currentCell = 81
let boxFlag = 9
// if boxflag == 9, you can go in any cell, otherwise you can only go in the one cell
// e.g. boxFlag 0 is top left only, boxFlag 8 is bottom right etc

let fullboard = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

function regionMatch(cur) {
  for (i = 0; i < 9; i++) {
    if ((cur >= (9 * i)) && (cur < ((9 * i) + 9))) {
      return boxFlag == i
    }
  }
}

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

class Cell {
  constructor(row, pushToParent) {
    this.x = null;
    this.o = null;
    this.row = row;
    this.pushToParent = pushToParent
  }
  test() {
    console.log('This is coming from the parent!!!')
  }





  draw() {

    let td = document.createElement('td');
    td.setAttribute('id', cellNumber);
    cellNumber++;
    // let pushToParent = this.pushToParent

    td.onclick = (e) => {
      this.pushToParent()
      currentCell = e.target.id
      if (((boxFlag == 9) || regionMatch(currentCell)) && (fullboard[currentCell] == "")) {
        e.target.innerHTML = turn % 2 ? 'X' : 'O'
        fullboard[currentCell] = turn % 2 ? 'X' : 'O'
        // parent.arr.push(X or O)
        //console.log(this)
        //console.log(turn)
        turn++
        //console.log(fullboard)
        boxFlag = (currentCell % 9)
        //console.log(boxFlag)
      } else {

        alert("wrong!")
      }
    };
    this.row.append(td);
    // console.log(e.target.id)
  }
}

class Box extends Cell {
  constructor(x) {
    super();
    this.x = null;
    this.o = null;
    this.pointerEvents = false;
    this.boxId = x;
    this.win = 0
    this.arr = ["", "", "", "", "", "", "", "", ""]
  }

  callTest() {
    super.test()
  }

  checkWin() {
    let tie = true;
    for (let i = 0; i < 8; i++) {
      if ((this.arr[winCombo[i][0]] == this.arr[winCombo[i][1]]) && (this.arr[winCombo[i][1]] == this.arr[winCombo[i][2]])) {
        if ((this.arr[winCombo[i][0]] !== "") && (this.arr[winCombo[i][1]] !== "") && (this.arr[winCombo[i][2]] !== "")) {
          return true
        }
      }

      if (this.arr[i] === "") { //Checks if a tie
        tie = false
      }
    }


    return false
  }


  pushParent(row, column) {
    console.log(row, column)
    this.arr[row * 3 + column] = turn % 2 ? 'X' : 'O'
    console.log(this)
    console.log("Did i win? ", this.checkWin())
  }

  draw(x) {
    // console.log(this);
    // super.draw();
    // this.pushParent()

    let div = document.createElement('div');
    div.setAttribute("id", this.boxId - 1 + 100)
    div.classList.add('small-box');
    document.body.querySelector('.game-box').append(div);
    let table = document.createElement('table');
    div.append(table);
    // document.querySelector(".small-box").setAttribute("id", boxNumber);
    // boxNumber++;
    for (let i = 0; i < 3; i++) {
      let tr = document.createElement('tr');
      table.append(tr);
      for (let j = 0; j < 3; j++) {
        new Cell(tr, () => this.pushParent(i, j)).draw();
      }
    }
  }
}

for (i = 1; i < 10; i++) {
  new Box(i).draw(i);
}

if (boxFlag < 9) {
  // target smallbox (id=boxflag) add css (fancy)
  document.getElementById('#101').style.color = "black"
  console.log("hello")
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