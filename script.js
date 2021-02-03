
let turn = 0;

class Box {
    constructor() {
        this.x = null
        this.o = null
        this.pointerEvents = false;
    }
    draw(x) {
        let div = document.createElement('div')
        div.classList.add('small-box')
        document.body.querySelector('.game-box').append(div)

        let table = document.createElement('table')
        div.append(table)
        for (let i = 0; i < 3; i++) {
            let tr = document.createElement('tr')
            table.append(tr)
            for (let j = 0; j < 3; j++) {
                new Cell(tr).draw()
            }

        }

    }
}


class Cell {
    constructor(row) {
        this.x = null
        this.o = null
        this.row = row

    }
    draw() {
        let td = document.createElement("td")
        td.onclick = function () {
            turn++
            this.innerHTML = turn % 2 ? 'X' : 'O'
        }
        this.row.append(td)
    }
}



for (i = 1; i < 10; i++) {
    new Box().draw(i)
}