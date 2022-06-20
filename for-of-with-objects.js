const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In Bruges': 9,
    Amadeus: 10,
    'Kill Bill': 8,
    'Little Miss Sunshine': 8.5,
    Coraline: 7.5
};

// THIS DOES NOT WORK!
// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
// for (let x of movieReviews) {
// 	console.log(x);
// }

// We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
    console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// We can also iterate over the values
// To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
    total += r;
}
let avg = total / ratings.length;
console.log('Average Rating: ', avg);



//For..in example with jepardy constestants earnings

const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 1000000,
};


for (let prop in jeopardyWinnings) {
    console.log(prop);
    // regularPlay, watsonChallenge, tournamentOfChampions, battleOfTheDecade- will list all of the keys
    console.log(jeopardyWinnings[prop]);
    //will list the keys and the values -regualrPlay 2522700 etc

}

// If we wanted sum up his total earnings


for (let prop in jeopardyWinnings) {
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
}
let total = 0;
for (let prop in jeopardyWinnings) {
    total += jeopardyWinnings[prop];
}
console.log('Ken Jennings Total Earnings: ${total}');