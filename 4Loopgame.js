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
    constructor(win, arr) {
        this.win = 0
        this.arr = ["", "", "", "", "", "", "", "", ""]
    }

    checkWin() {
        for (let i = 0; i < 8; i++) {
            if ((this.arr[winCombo[i][0]] == this.arr[winCombo[i][1]]) && (this.arr[winCombo[i][1]] == this.arr[winCombo[i][2]])) {
                if ((this.arr[winCombo[i][0]] !== "") && (this.arr[winCombo[i][1]] !== "") && (this.arr[winCombo[i][2]] !== "")) {
                    return true
                }
            }
        } return false
    }
}

let Box1 = new Box(0, [])

document.querySelector(".game-box").onclick = function (e) {
    let cell = e.target.id
    if (Number(cell) > 0) {
        Box1.arr[cell - 1] = turn
        if (Box1.checkWin()) {
            alert("WIN")
        }
        changeTurn()
    }
}

document.querySelectorAll(".game-box").forEach(function (box) {



    box.onclick = function (e) {
        if (turn) {
            this.classList.add("red")
        } else {
            this.classList.add("blue")
        }
        console.log(this.classList)
    }
})



// for (let i = 0; i < 8; i++) {

//     document.querySelector("body").innerHTML += `
// <div class="game-box">

// <div class="small-box" id="1">

// </div>
// <div class="small-box" id="2">

// </div>
// <div class="small-box" id="3">

// </div>
// <div class="small-box" id="4">

// </div>
// <div class="small-box" id="5">

// </div>
// <div class="small-box" id="6">

// </div>
// <div class="small-box" id="7">

// </div>
// <div class="small-box" id="8">

// </div>
// <div class="small-box" id="9">

// </div>

// </div>
// `
// }
