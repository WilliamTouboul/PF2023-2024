
// Variables
const squareContainer = document.querySelector('#square_container');
const squareSize = 100;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const numCols = Math.ceil(screenWidth / squareSize);
const numRows = Math.ceil(screenHeight / squareSize);
const numSquares = numCols * numRows;


// Taille du container dynamique
squareContainer.style.width = `${numCols * squareSize}px`;
squareContainer.style.height = `${numRows * squareSize}px`;

// Array avec tout les carrés
let squares = [];

function createSquares() {
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        squareContainer.appendChild(square);
        squares.push(square);
    }
}

function goingOut() {
    gsap.fromTo(squares, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: .2,
        duration: 0.0002,
        stagger: {
            each: 0.002,
            from: 'random',
        }
    });
}

function goingIn() {
    gsap.fromTo(squares, {
        opacity: 1,
    }, {
        opacity: 0,
        delay: 1,
        duration: 0.0002,
        stagger: {
            each: 0.002,
            from: 'random',
        }
    });
}

barba.init({
    views: [{
        namespace: 'home',
        beforeEnter() {
            squareContainer.innerHTML = '';
            createSquares();
            goingIn();
            console.log('in')
        },
        beforeLeave() {
            console.log('out')
            return new Promise((resolve) => {
                squareContainer.innerHTML = '';
                createSquares();
                goingOut();
                setTimeout(resolve, 1500);
            });
        }
    }, {
        namespace: 'hotel',
        beforeEnter() {
            squareContainer.innerHTML = '';
            createSquares();
            goingIn();
        },
        beforeLeave() {
            console.log('out')
            return new Promise((resolve) => {
                squareContainer.innerHTML = '';
                createSquares();
                goingOut();
                setTimeout(resolve, 1500);
            });
        }
    }]
});


// document.getElementById('toggle').addEventListener('click', () => {
//     squareContainer.innerHTML = '';
//     createSquares();
//     goingOut();
// });

