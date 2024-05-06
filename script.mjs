const Pi = 3.1415;
const radius = 5;
const area = Pi * radius * radius;

// Part 1
console.log(`Part One`)

console.log(`\nThe total area is: `, area);
// Total Space = 78.54

const reqSpaceForEach = 0.8;
let startingPlants = 20;
let currentSpace = reqSpaceForEach * startingPlants;

let prunedTest = area * .8; // 80% of the area

let fiftyPercent = (area * .5);
let eightyPercent = (area * .8);

console.log(`\nFrom the starting point, ` + currentSpace + ` meters is the amount of current space used`)

// Week 1

let plants = startingPlants * 2;
currentSpace = reqSpaceForEach * plants;

console.log(`\nIn week 1, the amount space ( area ) is: ` + currentSpace + ` meters`);
console.log(`There is now a total of ` + plants + ` Plants this week`);

// Pruned Test
if (currentSpace < prunedTest ){
    console.log("Pruned Test - Week 1 fits within the maximum capacity of the garden.");
} else {
    console.log("Pruned Test - There is not enough space in the garden ( over 80%");
}

// Monitored Test
if (currentSpace >= fiftyPercent && currentSpace <= eightyPercent) {
    console.log(`Monitored Test - The plants are growing within 50-80 percent of the garden capacity this week.`)
} else {
    console.log("Monitored Test - The plants are growing either too slow or too fast ( Not within 50-80 percent of the maximum capacity )");
}

// Planted Test
if (plants <= fiftyPercent) {
    console.log(`Planted Test - There is less than 50% of plants planted that can fit in the garden`);
} else {
    console.log(`Planted Test - There are too many plants within the garden's capacity ( over 50% )`);
}

// Week 2

plants = startingPlants * 2;
currentSpace = reqSpaceForEach * plants;

console.log(`\nIn week 2, the amount space ( area ) is: ` + currentSpace + ` meters`);
console.log(`There is now a total of ` + plants + ` Plants this week`);

// Pruned Test
if (currentSpace < prunedTest ){
    console.log("Pruned Test - Week 2 fits within the maximum capacity of the garden.");
} else {
    console.log("Pruned Test - There is not enough space in the garden ( over 80%");
}

// Monitored Test
if (currentSpace >= fiftyPercent && currentSpace <= eightyPercent) {
    console.log(`Monitored Test - The plants are growing within 50-80 percent of the garden capacity this week.`)
} else {
    console.log("Monitored Test - The plants are growing either too slow or too fast ( Not within 50-80 percent of the maximum capacity )");
}

// Planted Test
if (plants <= fiftyPercent) {
    console.log(`Planted Test - There is less than 50% of plants planted that can fit in the garden`);
} else {
    console.log(`Planted Test - There are too many plants within the garden's capacity ( over 50% )`);
}

// Week 3

plants = startingPlants * 2;
currentSpace = reqSpaceForEach * plants;

console.log(`\nIn week 3, the amount space ( area ) is: ` + currentSpace + ` meters`);
console.log(`There is now a total of ` + plants + ` Plants this week`);

// Pruned Test
if (currentSpace < prunedTest ){
    console.log("Pruned Test - Week 3 fits within the maximum capacity of the garden.");
} else {
    console.log("Pruned Test - There is not enough space in the garden ( over 80%");
}

// Monitored Test
if (currentSpace >= fiftyPercent && currentSpace <= eightyPercent) {
    console.log(`Monitored Test - The plants are growing within 50-80 percent of the garden capacity this week.`)
} else {
    console.log("Monitored Test - The plants are growing either too slow or too fast ( Not within 50-80 percent of the maximum capacity )");
}

// Planted Test
if (plants <= fiftyPercent) {
    console.log(`Planted Test - There is less than 50% of plants planted that can fit in the garden`);
} else {
    console.log(`Planted Test - There are too many plants within the garden's capacity ( over 50% )`);
}

// Part 2

console.log(`\nPart Two`);
const firstGardenInitalArea = startingPlants * reqSpaceForEach;
console.log(`For the first Garden, with the inital 20 plants, the total amount of meters initally used was: ` + firstGardenInitalArea);

const newGardenStartingPlants = 100;
let newCurrentSpace = newGardenStartingPlants * reqSpaceForEach;

let gardenDifference = newCurrentSpace / 16;

const newGardenRadius = gardenDifference * radius;

console.log(`For the new expanded garden, the Radius would then be ` + newGardenRadius);

// Part 3

console.log(`\nPart Three`);
// try ( ) {
//     ;
// } catch ;
