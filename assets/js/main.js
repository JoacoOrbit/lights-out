const gamePiece = document.querySelectorAll(".board-piece");

function randomLights () {

    for(let i = 0; i<gamePiece.length; i++){
        let random = Math.floor(Math.random()*2);
        if (random == 1) {
            gamePiece[i].classList.toggle("light");
        }
    }

    // gamePiece.forEach(element => {
    //     let random = Math.floor(Math.random()*2);
    //     if (random == 1) {
    //         element.classList.toggle("light");
    //     }
        
    // });
}


// for (let i=0; i<(gamePiece.length/gameWidth); i++){
//     for (let j=0; j<gameWidth; i++){
//         if ()
//         gameGrid[][] = 
//     }
// }

// let numberHelp;

// TODO: make gameGrid array dynamic and scalable, creating it from variables with a loop, with variables like row and columns in a function

let gameGrid=[[],[],[],[],[]];
let gameWidth = 5;

function gameGridArray () {
for (let i = 0; i<gamePiece.length; i++){
    let row = Math.floor(i/gameWidth);
    let column = i - (row*5);
    console.log(row + " " + (column));
    if (gamePiece[i].classList.contains("light")){
        gameGrid[row][column] = 1;
    } else {
        gameGrid[row][column] = 0;
    }
}
}

console.log(gameGrid);

function clickEvent () {
    // gamePiece.forEach(element => {
    //     element.addEventListener("click", () => {
    //         element.classList.toggle("light");
    //     })
    // });
    for(let i = 0; i < gamePiece.length; i++){
        // let row = Math.floor(i/gameWidth);
        // let column = i - (row*5);
        gamePiece[i].addEventListener("click", () => {
            gamePiece[i].classList.toggle("light");
            if ((i/5) % 1 !== 0){
                gamePiece[i-1].classList.toggle("light");
            }
            if (((i+1)/5) % 1 !== 0){
                gamePiece[i+1].classList.toggle("light");
            }
            if (i > 4) {
                gamePiece[i-5].classList.toggle("light");
            }
            if (i < 20){
                gamePiece[i+5].classList.toggle("light");
            }
        });
        
    }
}

const winAlert = document.querySelector(".win-alert");

function winCondition(){
    let lightedPieces= 0;
    gamePiece.forEach(element => {
        if (element.classList.contains("light")){
            lightedPieces++;
        }
    });
    if (lightedPieces==0){
        console.log("ganaste!")
        winAlert.classList.remove("hidden");
    } else {
        console.log("aun no");
    }
}


randomLights();
gameGridArray();
clickEvent();
setInterval(winCondition, 500);