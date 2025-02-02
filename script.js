////////////////////////////////////


const bricks = [
    // I-block
    [
        [{ top: 0, left: 0, shift: 3 }, { top: 0, left: 1, center: true, shift: 3 }, { top: 0, left: 2, shift: 3 }, { top: 0, left: 3, shift: 3 }], // Horizontal
        [{ top: 0, left: 1, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 2, left: 1, shift: 3 }, { top: 3, left: 1, shift: 3 }], // Vertical
        [{ top: 1, left: 0, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 1, left: 2, shift: 3 }, { top: 1, left: 3, shift: 3 }], // Horizontal (shifted)
        [{ top: 0, left: 2, shift: 3 }, { top: 1, left: 2, center: true, shift: 3 }, { top: 2, left: 2, shift: 3 }, { top: 3, left: 2, shift: 3 }]  // Vertical (shifted)
    ],
    // J-block
    [
        [{ top: 0, left: 0, shift: 3 }, { top: 1, left: 0, center: true, shift: 3 }, { top: 1, left: 1, shift: 3 }, { top: 1, left: 2, shift: 3 }], // J pointing up
        [{ top: 0, left: 1, shift: 3 }, { top: 0, left: 2, center: true, shift: 3 }, { top: 1, left: 1, shift: 3 }, { top: 2, left: 1, shift: 3 }], // J pointing right
        [{ top: 1, left: 0, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 1, left: 2, shift: 3 }, { top: 2, left: 2, shift: 3 }], // J pointing down
        [{ top: 0, left: 1, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 2, left: 0, shift: 3 }, { top: 2, left: 1, shift: 3 }]  // J pointing left
    ],
    // L-block
    [
        [{ top: 0, left: 2, shift: 3 }, { top: 1, left: 0, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 1, left: 2, shift: 3 }], // L pointing up
        [{ top: 0, left: 1, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 2, left: 1, shift: 3 }, { top: 2, left: 2, shift: 3 }], // L pointing right
        [{ top: 1, left: 0, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 1, left: 2, shift: 3 }, { top: 2, left: 0, shift: 3 }], // L pointing down
        [{ top: 0, left: 0, shift: 3 }, { top: 0, left: 1, center: true, shift: 3 }, { top: 1, left: 1, shift: 3 }, { top: 2, left: 1, shift: 3 }]  // L pointing left
    ],
    // O-block
    [
        [{ top: 0, left: 0, shift: 4 }, { top: 0, left: 1, shift: 4 }, { top: 1, left: 0, shift: 4 }, { top: 1, left: 1, shift: 4 }] // O-block (no rotation)
    ],
    // S-block
    [
        [{ top: 0, left: 1, center: true, shift: 3 }, { top: 0, left: 2, shift: 3 }, { top: 1, left: 0, shift: 3 }, { top: 1, left: 1, shift: 3 }], // S pointing up
        [{ top: 0, left: 1, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 1, left: 2, shift: 3 }, { top: 2, left: 2, shift: 3 }], // S pointing right
        [{ top: 1, left: 1, center: true, shift: 3 }, { top: 1, left: 2, shift: 3 }, { top: 2, left: 0, shift: 3 }, { top: 2, left: 1, shift: 3 }], // S pointing down
        [{ top: 0, left: 0, shift: 3 }, { top: 1, left: 0, center: true, shift: 3 }, { top: 1, left: 1, shift: 3 }, { top: 2, left: 1, shift: 3 }]  // S pointing left
    ],
    // T-block
    [
        [{ top: 0, left: 1, shift: 3 }, { top: 1, left: 0, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 1, left: 2, shift: 3 }], // T pointing up
        [{ top: 0, left: 1, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 1, left: 2, shift: 3 }, { top: 2, left: 1, shift: 3 }], // T pointing right
        [{ top: 1, left: 0, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 1, left: 2, shift: 3 }, { top: 2, left: 1, shift: 3 }], // T pointing down
        [{ top: 0, left: 1, shift: 3 }, { top: 1, left: 0, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 2, left: 1, shift: 3 }]  // T pointing left
    ],
    // Z-block
    [
        [{ top: 0, left: 0, shift: 3 }, { top: 0, left: 1, center: true, shift: 3 }, { top: 1, left: 1, shift: 3 }, { top: 1, left: 2, shift: 3 }], // Z pointing up
        [{ top: 0, left: 2, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 1, left: 2, shift: 3 }, { top: 2, left: 1, shift: 3 }], // Z pointing right
        [{ top: 1, left: 0, shift: 3 }, { top: 1, left: 1, center: true, shift: 3 }, { top: 2, left: 1, shift: 3 }, { top: 2, left: 2, shift: 3 }], // Z pointing down
        [{ top: 0, left: 1, shift: 3 }, { top: 1, left: 0, center: true, shift: 3 }, { top: 1, left: 1, shift: 3 }, { top: 2, left: 0, shift: 3 }]  // Z pointing left
    ]
];

const availablePlaces = [];
function initializeAvailablePlaces() {
    availablePlaces.splice(0, availablePlaces.length);
    for (let i = 0; i < 15; i++) {
        const tempArr = [];
        for (let j = 0; j < 10; j++) {
            tempArr.push({ top: i * 40, left: j * 40, isAvailable: true });
        }
        availablePlaces.push(tempArr);
    }

}
initializeAvailablePlaces();

let randomBlockIndex = null;
let randomBlockSubindex = null;

function generateBricksBlock(isNew = true) {
    if (isNew) {
        randomBlockIndex = Math.floor(Math.random() * bricks.length);
        randomBlockSubindex = Math.floor(Math.random() * bricks[randomBlockIndex].length);
    }
    else {
        randomBlockSubindex = (randomBlockSubindex + 1) % bricks[randomBlockIndex].length;
    }
    let bricksBlock = [];
    bricks[randomBlockIndex][randomBlockSubindex].forEach(brick => {
        const newBrick = document.createElement('div');
        newBrick.classList.add('brick');
        newBrick.style.top = `${brick.top * 40}px`;
        newBrick.style.left = `${(brick.left + brick.shift) * 40}px`;
        if (brick.center) {
            newBrick.classList.add('center');
        }
        bricksBlock.push(newBrick);
        tetris.appendChild(newBrick);
    })

    return bricksBlock;

}
function turnBricksBlock() {
    if (document.querySelector('.center')) {
        const leftOfCenter = parseInt(document.querySelector('.center').style.left);
        const topOfCenter = parseInt(document.querySelector('.center').style.top);

        // console.log("center: left=", leftOfCenter, "top=", topOfCenter);
        let offsetLeft = 0;
        let offsetTop = 0;

        currentBricksBlock.forEach(brick => { brick.remove(); });
        currentBricksBlock = generateBricksBlock(false);
        offsetLeft = leftOfCenter - parseInt(document.querySelector('.center').style.left);
        offsetTop = topOfCenter - parseInt(document.querySelector('.center').style.top);
        // console.log("current center: left=", parseInt(document.querySelector('.center').style.left), "top=", parseInt(document.querySelector('.center').style.top));
        // console.log("offsetLeft=", offsetLeft, "offsetTop=", offsetTop);
        currentBricksBlock.forEach(brick => {
            brick.style.left = `${parseInt(brick.style.left) + offsetLeft}px`;
            brick.style.top = `${parseInt(brick.style.top) + offsetTop}px`;
        })

    }
}

let currentBricksBlock = generateBricksBlock();


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveBricksBlock('right');
    }
    if (event.key === 'ArrowLeft') {
        moveBricksBlock('left');
    }
    if (event.key === 'ArrowDown') {
        moveBricksBlock('down');
    }
    if (event.key === 'ArrowUp') {
        moveBricksBlock('up');
    }
})

function moveBricksBlock(dir) {
    if (!checkMovingAvailability(dir)) {
        console.log('### moving is not available');
        return;
    };
    switch (dir) {
        case 'right':
            currentBricksBlock.forEach(brick => { brick.style.left = `${parseInt(brick.style.left) + 40}px`; });
            break;
        case 'left':
            currentBricksBlock.forEach(brick => { brick.style.left = `${parseInt(brick.style.left) - 40}px`; });
            break;
        case 'down':
            currentBricksBlock.forEach(brick => { brick.style.top = `${parseInt(brick.style.top) + 40}px`; });
            break;
        case 'up':
            turnBricksBlock();

            break;
    }
}

function checkMovingAvailability(dir) {
    switch (dir) {
        case 'none':
            for (const brick of bricks[randomBlockIndex][randomBlockSubindex]) {

                if (!availablePlaces[brick.top][brick.left + brick.shift].isAvailable) {
                    console.log("game over");
                    gameOver();
                    return false;
                }
            }
            return true;

        case 'right':
            for (const brick of currentBricksBlock) {
                if (!availablePlaces[parseInt(brick.style.top) / 40]?.[parseInt(brick.style.left) / 40 + 1]?.isAvailable) {
                    // console.log('moving is not available, false');
                    return false;
                }
            }
            // console.log(' moving is available, true');
            return true;
        case 'left':
            for (const brick of currentBricksBlock) {
                if (!availablePlaces[parseInt(brick.style.top) / 40]?.[parseInt(brick.style.left) / 40 - 1]?.isAvailable) {
                    return false;
                }
            }
            return true;
        case 'down':
            for (const brick of currentBricksBlock) {
                if (!availablePlaces[parseInt(brick.style.top) / 40 + 1]?.[parseInt(brick.style.left) / 40]?.isAvailable) {
                    return false;
                }
            }
            return true;
        case 'up':

            if (document.querySelector('.center')) {
                const leftOfCenter = parseInt(document.querySelector('.center').style.left) / 40;
                const topOfCenter = parseInt(document.querySelector('.center').style.top) / 40;
                // console.log("center: left=", leftOfCenter, "top=", topOfCenter);
                const tempRandomBlockSubindex = (randomBlockSubindex + 1) % bricks[randomBlockIndex].length;

                for (const brick of bricks[randomBlockIndex][tempRandomBlockSubindex]) {
                    if (brick.center) {
                        // console.log("in if(brick.center)");
                        const offsetLeft = leftOfCenter - brick.left;
                        const offsetTop = topOfCenter - brick.top;

                        // console.log("offsetLeft=", offsetLeft, "offsetTop=", offsetTop);

                        for (const tempBrick of bricks[randomBlockIndex][tempRandomBlockSubindex]) {
                            if (!availablePlaces[tempBrick.top + offsetTop]?.[tempBrick.left + offsetLeft]?.isAvailable) {
                                // console.log('moving is not available, false');
                                return false;
                            }
                        }
                        // console.log(' moving is available, true');
                        return true;
                    }

                }
                return false;

            }

    }
}


function updateAvailablePlaces() {
    currentBricksBlock.forEach(brick => {
        availablePlaces[parseInt(brick.style.top) / 40][parseInt(brick.style.left) / 40].isAvailable = false;
        if (availablePlaces[parseInt(brick.style.top) / 40].every(place => !place.isAvailable)) {
            clearAndShiftCompletedLines(parseInt(brick.style.top) / 40);

        }
    });
    currentBricksBlock = null;
    if (document.querySelector('.center')) {
        document.querySelector('.center').classList.remove('center');
    }

    currentBricksBlock = generateBricksBlock();
}

let timer = setInterval(() => {
    if (!checkMovingAvailability('down')) {
        updateAvailablePlaces();
        checkMovingAvailability('none');
    }
    else {
        moveBricksBlock('down');
    }
}, 500);

function gameOver() {
    clearInterval(timer);
    setTimeout(() => {
        alert('Game Over!')
        window.location.reload();

    }, 1000);
}

function newGame() {

    document.querySelectorAll('.brick').forEach(b => b.remove());
    currentBricksBlock.forEach(b => b.remove());
    initializeAvailablePlaces();
    currentBricksBlock = generateBricksBlock();
    timer = setInterval(() => {
        if (!checkMovingAvailability('down')) {
            updateAvailablePlaces();
            checkMovingAvailability('none');
        }
        else {
            moveBricksBlock('down');
        }
    }, 500);

}

function clearAndShiftCompletedLines(line) {
    for (let i = line; i > 0; i--) {
        for (let j = 0; j < 10; j++) {
            availablePlaces[i][j].isAvailable = availablePlaces[i - 1][j].isAvailable;
        }
    }
    for (let j = 0; j < 10; j++) {
        availablePlaces[0][j].isAvailable = true;
    }
    //🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢 filter(), getComputedStyle()
    const matchedElements = Array.from(document.querySelectorAll('.brick')).filter(element => {
        // const style = element.style;
        const style = window.getComputedStyle(element);
        return style.top === `${line * 40}px`;

        // const rect = element.getBoundingClientRect();
        // return rect.top === line * 40;
    });

    matchedElements.forEach(element => {
        element.remove();
    });

    const matchedElements2 = Array.from(document.querySelectorAll('.brick')).filter(element => {
        const style = window.getComputedStyle(element);
        const top = parseInt(style.top);
        return top < line * 40;
    });

    setTimeout(() => {
        matchedElements2.forEach(element => {
            const style = window.getComputedStyle(element);
            element.style.top = `${parseInt(style.top) + 40}px`;
        });

    }, 100);





}