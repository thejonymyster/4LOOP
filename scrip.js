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

}