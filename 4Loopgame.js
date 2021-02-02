let turn = 0

function changeTurn() {
    turn = 1 - turn
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

class Box {
<<<<<<< HEAD
    constructor(win, array) {
        this.win = 0
        this.arr = ["", "", "", "", "", "", "", "", ""]
    }

    checkWin() {
        for (i = 0; i < 8; i++) {
            if ((this.arr[winCombo[i][0]] == this.arr[winCombo[i][1]]) && (this.arr[winCombo[i][1]] == this.arr[winCombo[i][2]])) {
=======
    constructor(win, arr) {
      this.win = 0
      this.arr = ["", "", "", "", "", "", "", "", ""]
    }

  checkWin() {
    for (let i=0; i<8 ;i++){
        if ((this.arr[winCombo[i][0]] == this.arr[winCombo[i][1]]) && (this.arr[winCombo[i][1]] == this.arr[winCombo[i][2]])){
            if ((this.arr[winCombo[i][0]] !== "") && (this.arr[winCombo[i][1]] !== "") && (this.arr[winCombo[i][2]] !== "")) {
>>>>>>> 6a31d8131995704a7c2f8ca6678839e7c504bf30
                return true
            }
        }
        return false
    }
}

<<<<<<< HEAD
function changeTurn() {
    turn = 1 - turn
}


=======
let Box1 = new Box(0,[])

document.querySelector(".game-box").onclick = function(e){
    let cell = e.target.id
    if(Number(cell)>0){
        Box1.arr[cell - 1] = turn
        if (Box1.checkWin()){
            alert("WIN")
        }
        changeTurn()
    }
}

document.querySelector(".small-box").onclick = function(e){
      if (turn) {
        this.classList.add("red")
      } else {
        this.classList.add("blue")
      }
console.log(this.classList)
}
>>>>>>> 6a31d8131995704a7c2f8ca6678839e7c504bf30
