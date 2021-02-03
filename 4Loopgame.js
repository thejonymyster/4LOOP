// Html elements
const statusDiv = document.querySelector('.status')
const resetDiv = document.querySelector('.status')
const cellDivs = document.querySelectorAll('.game-cell');

//game variable
let gameIsLive = true;
let xIsNext = true;

// functions
const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[2];
    const topMiddle = cellDivs[1].classList[2];
    const topRight = cellDivs[2].classList[2];
    const middleLeft = cellDivs[3].classList[2];
    const middleMiddle = cellDivs[4].classList[2];
    const middleRight = cellDivs[5].classList[2];
    const bottomLeft = cellDivs[6].classList[2];
    const bottomMiddle = cellDivs[7].classList[2];
    const bottomRight = cellDivs[8].classList[2];

    console.log(topLeft, topMiddle, topRight, middleLeft,
        middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight);

    // is there a winner

    if (topLeft && topLeft === topMiddle && topLeft === topRight)



};


// event handlers
const handleReset = (e) => {
    console.log(e);
};

const handlecellClick = (e) => {
    const location = e.target.classList;
    const location = classList[1];
    if (classList[2] === 'x' || classList[2] === 'o') {
        return;
    }
    if (xIsNext) {
        classList.add('x');
        checkGameStatus();
        //console.log(e.target)
    } else {
        classList.add('o');
        checkGameStatus();
        xIsNext = !xIsNext;

    }
    console.log("location", location);


};

// event listeners
resetDiv.addEventlistener('click', handleReset);

for (const cellDiv of celldivs) {
    cellDiv.addEventlistener('click', handleCellClick)
}