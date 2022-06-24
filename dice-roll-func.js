function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled : ${roll}`);
}

/*function throwDice() {
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}
*/
// Redoing the number of rolls using arguments

function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        rollDie();
    }
}
throwDice(3) /*
Rolled:4
Rolled:6
Rolled:2
*/


