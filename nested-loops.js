for (let i = 1; i <= 10; i++) {
    console.log('OUTER LOOP:', i);
    for (let j = 10; j >= 0; j -= 2) {
        console.log('  INNER LOOP', j);
    }
}
/* 10
        8
        6   
        4
        2
        0
    9
        8
        6
        4
        2
        0.... */


// EXAMPLE 2
// Sum all elements in our 2048 board
const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

/* following loop demonstrates how the inner loop completes a full iteration in one outer loop. Like example 1


for(let i=0; i<gameBoard.length; i++){
    let row=gameBoard[i];
    console.log(row);
    for (let j= 0; j<row.length; j ++){
        console.log(row[j]);
    }
}

*/

let totalScore = 0;
//outer loop iterates through the rows
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    //inner loop iterates over each cell in a given row
    for (let j = 0; j < row.length; j++) {
        totalScore += row[j];
    }
}
