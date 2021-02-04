
let turn = 0;

class Box {
    constructor(rowNum) {
        this.x = null
        this.o = null
        this.rowNum = rowNum
        this.pointerEvents = false;
    }
    draw(x) {
        let div = document.createElement('div')
        div.classList.add('small-box')
        document.body.querySelector('.game-box').append(div)

        let table = document.createElement('table')
        div.append(table)
        for (let i = 1; i < 4; i++) {
            let tr = document.createElement('tr')
            table.append(tr)
            for (let j = 1; j < 4; j++) {
                new Cell(tr, i, j, this.rowNum).draw()
            }

        }

    }
}


class Cell {
    constructor(row, block, microBlock, rowNum) {
        this.x = null
        this.o = null
        this.rowNum = rowNum
        this.row = row
        this.block = block;
        this.microBlock = microBlock

    }
    draw() {
        let td = document.createElement("td")
        td.classList.add(`${this.rowNum}-${this.block}-${this.microBlock}`)
        td.onclick = function () {
            turn++
            this.innerHTML = turn % 2 ? 'X' : 'O'
        }
        this.row.append(td)
    }
}



for (i = 1; i < 10; i++) {
    new Box(i).draw(i)
}