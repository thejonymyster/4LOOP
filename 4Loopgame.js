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

    // document.querySelector(".small-box").onclick = function (e) {
    //     if (turn) {
    //         this.classList.add("red")
    //     } else {
    //         this.classList.add("blue")
    //     }
    //     console.log(this.classList)
    // }


    // jQuery(document).ready(function($) {

    //     $('#coin').on('click', function () {
    //         var flipResult = Math.random();
    //         $('#coin').removeClass();
    //         setTimeout(function () {
    //             if (flipResult <= 0.5) {
    //                 $('#coin').addClass('heads');
    //                 console.log('it is head');
    //             }
    //             else {
    //                 $('#coin').addClass('tails');
    //                 console.log('it is tails');
    //             }
    //         }, 100);
    //     });
    // });
