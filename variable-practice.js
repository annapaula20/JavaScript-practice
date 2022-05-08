var stuff = [
    "cars",
    "blankets",
    "sunflowers",
    "sky",
    "yellow",
    "code",
    "perfume",
    "coffee",
    "books"
];
stuff.forEach(function (item, index) {
    // log out items with even index
    if (index % 2 === 0) {
        console.log(item);
    }
});

//Excercise 2

/*Create function that will remove an element from an array
var removeItem = function (array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    console.log("No such element exists in the array.");
  } else {
    console.log(`Removing ${item}`);
    array.splice(index, 1);
  }
};

removeItem(stuff, "books");
console.log(stuff);
removeItem(stuff, "cats");
console.log(stuff);*/

//Excercise 3

// Using 'filter'
var filterStuff = stuff.filter(function (item) {
    return item.includes("s");
});
console.log(filterStuff);

// Using an empty array and a for loop
var newArray = [];
for (var item of stuff) {
    if (item.includes("s")) {
        newArray.push(item);
    }
}
console.log(newArray);