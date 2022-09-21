/*let ageOfUser = prompt("what is your age?");

const age = ageOfUser;

if (age <= 5) {
    console.log("You get it for free!");
} else if (age <= 10) {
    console.log("Your fee is $10");
} else if (age <= 64) {
    console.log("Your fee is $20");
} else if (age >= 65) {
    console.log("Your fee is $10");
}*/

let dayOfWeek = prompt("What day of the week is it today?");

const answer = dayOfWeek.toLowerCase();

if (answer === 'saturday') {
    alert('today is a great day for relaxing!');
} else if (answer === 'sunday') {
    alert('Has the Sunday scaries kicked in yet?');
} else if (answer === 'friday') {
    alert('TGIF we are almost at the weekend!');
} else {
    alert('Working 9 to 5, what a way to make a livin ');
}