let turn = 0

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
    constructor(win, array) {
      this.win = 0
      this.arr = ["", "", "", "", "", "", "", "", ""]
    }

  checkWin() {
    for (i=0; i<8 ;i++){
        if ((this.arr[winCombo[i][0]] == this.arr[winCombo[i][1]]) && (this.arr[winCombo[i][1]] == this.arr[winCombo[i][2]])){
            return true
        }
    }
    return false
  }
}

function changeTurn() {
    turn = 1 - turn
}