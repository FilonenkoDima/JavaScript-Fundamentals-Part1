//asigment to lecture - Values and Variables

/*let country = "Ukraine";
let continent = "Europe";
let population = 40;

console.log(country);
console.log(continent);
console.log(population);

//assigment to lecture - Data Types

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


//assignment to lecture - let, const and var

let language;
language = "Ukraininan"
const country = "Ukraine";
const continent = "Europe";
const isIsland = false;
let population = 40;
isIsland = true;


//assignment to lecture - Basic Operators

let language;
language = "Ukraininan"
const country = "Ukraine";
const continent = "Europe";
const isIsland = false;
let population = 40;

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);


//assignment to lecture - Operator Precedence

let massMark = 78;
const heightMark = 1.69;
let BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

let massJohn = 92;
const heightJohn = 1.95;
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//assignment to lecture - Strings and Template Literals

let language;
language = "Ukraininan"
const country = "Ukraine";
const continent = "Europe";
const isIsland = false;
let population = 40;
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);


//assignment to lecture - Taking Decision - if / else Statements

//task 1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (heightMark > heightJohn) {
   console.log("Mark's BMI is higher than John's!");
} else {
   console.log("John's BMI is higher than Mark's!");
}
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
   console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
   console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}

//task 2

let language;
language = "Ukraininan"
const country = "Ukraine";
const continent = "Europe";
const isIsland = false;
let population = 40;
if (population > 33) {
   console.log(`${country}\`s population is above average`);
} else {
   console.log(`${country}\`s population is ${33 - population} million below avarage`)
}


//assignment to lecture - Type Conversion and Coercion

const x1 = '9' - '5'; //4
const x2 = '19' - '13' + '17'; //617
const x3 = '19' - '13' + 17; //617 -- incorrect - 23
const x4 = '123' < 57; //false
const x5 = 5 + 6 + '4' + 9 - 4 - 2; // 1143

console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);


// assignment to lecture - Equality Operators: == vs ===

// const numNeighbours = prompt("How many neighbour countries does your country have?");

// if (numNeighbours == 1) console.log("Only 1 boarder!");
// else if (numNeighbours > 1) console.log("More than 1 border");
// else console.log("No borders");

const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) console.log("Only 1 boarder!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");


// assignment to lecture - Logical Operators

// task 1

const inUkraineLanguageIsEnglish = false;
const populationOfUrkaineLessThan50 = true;
const UkraineIsIsland = false;

if (inUkraineLanguageIsEnglish && populationOfUrkaineLessThan50 && !UkraineIsIsland) console.log("You should live in Ukraine :)");
else console.log("Ukraine does not meet your criteria :(");

const inUkraineLanguageIsEnglishTest = true;

if (inUkraineLanguageIsEnglishTest && populationOfUrkaineLessThan50 && !UkraineIsIsland) console.log("You should live in Ukraine :)");
else console.log("Ukraine does not meet your criteria :(");


//task 2

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) console.log("Dolphins win the trophy");
else if (scoreDolphins < scoreKoalas) console.log("Koalas win the trophy");
else console.log("Both win the trophy");


// assignment to lecture - The swith Statement
const language = 'arabic';
switch (language) {
   case 'chinese':
   case 'mandarin':
      console.log('MOST number of native speakers!');
      break;
   case 'spanish':
      console.log('2nd place in number of native speakers');
      break;
   case 'english':
      console.log('3rd place');
      break;
   case 'hindi':
      console.log('Number 4');
      break;
   case 'arabic':
      console.log('5th most spoken language');
      break;
   default:
      console.log('Great language too :D');
}
*/