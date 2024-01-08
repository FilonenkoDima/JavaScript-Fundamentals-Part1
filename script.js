/*let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//lecture: Variable name conventions

let $new = "JM";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);


// lecture: Data types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Hello");

javascriptIsFun = 23;
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


//let, const and var

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

//const job;

var job = 'programemr';
job = 'teacher';

lastName = 'Filonenko';
console.log(lastName);


//Basic Operators

//math operators
const now = 2037;
const ageDima = now - 2003;
const ageSarah = now - 2018;
console.log(ageDima, ageSarah);

console.log(ageDima * 2, ageDima / 2, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

const firstName = 'Dima';
const lastName = 'Filonenko';
console.log(firstName + ' ' + lastName);

//assignment operators

let x = 10 + 5; //15
x += 10; //25
x *= 4; // 100
x /= 10; //10
x -= 1; //9
x++; //10
++x; //11
x--; //10
--x; //9
console.log(x);

//comparison operators

console.log(ageDima > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019)


//Operator Precedence

const now = 2037;
const ageDima = now - 2003;
const ageSarah = now - 2018;

console.log(now - 2003 > now - 2018);

console.log(5 - 10 - 25);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const avarageAge = (ageDima + ageSarah) / 2;
console.log(avarageAge);


//Strings and Template Literals

const firstName = 'Dima';
const job = 'worker';
const birthYear = 2003;
const year = 2037;

const dima = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(dima);

const dimaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(dimaNew)

console.log(`Just a regular string...`);

console.log('String with \nmultiple\nlines');
console.log(`String with
multiple
lines`);


//Taking Decisions: if / else Statements
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
   console.log('Dima can start driving license🚗');
} else {
   const yearsLeft = 18 - age;
   console.log(`Dima is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2003;
let century;
if (birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}
console.log(century);


//Type Conversion and Coercion

//type conversion
const inputYear = '2003';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Dima'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coersion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * "2");
console.log('23' / "2");

let n = '1' + 1; // '11'
n -= 1; // 10
console.log(n);


//Truthy and Falsy Values

//5 falsy values: 0, '', undefied, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Dima"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(NaN));

const money = 0.1;
if (money) {
   console.log("Don't spend it all;")
} else {
   console.log("You should get a job!")
}

let height;
if (height) {
   console.log('YAY! Height is defined');
} else {
   console.log('Height is UNDEFIED');
}


//Equality Operators: == vs ===

const age = 18;
if (age === 18) console.log('You just became an adult :D (strict) num - num');
if (age == 18) console.log('You just became an adult :D (loose) num - num');

const ageString = '18';
if (ageString === 18) console.log('You just became an adult :D (strict) str - num');
if (ageString == 18) console.log('You just became an adult :D (loose) str - num');

const favourite = Number(prompt("What's yoru favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 27) {
   console.log('Cool! 27 is an amazing number!');
}

if (favourite === 27) {
   console.log('Cool! 27 is an amazing number!');
} else if (favourite === 7) {
   console.log('7 is also a cool number');
} else if (favourite === 9) {
   console.log('9 is also a cool number');
} else {
   console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 27) console.log('Why not 27?');


//lecture: Logical Operators

const hasDriversLicense = true; //A
const hasGoodVision = true; //b

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) console.log('Sarah is able to drive');
// else console.log('Someone else should drive...');

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) console.log('Sarah is able to drive');
else console.log('Someone else should drive...');


//The swith Statement

const day = 'thursday';
switch (day) {
   case 'monday': // day === 'monday'
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;
   case 'tuesday':
      console.log('Prepare theory videos');
      break;
   case 'wednesday':
   case 'thursday':
      console.log('Write code examples');
      break;
   case 'friday':
      console.log('Record videos');
      break;
   case 'saturday':
   case 'sunday':
      console.log('Enjoy the weekend');
      break;
   default:
      console.log('Not a valid day!');
}

if (day === 'monday') {
   console.log('Plan course structure');
   console.log('Go to coding meetup');
}
else if (day === 'tuesday')
   console.log('Prepare theory videos');
else if (day === 'wednesday' || day === 'thursday')
   console.log('Write code examples');
else if (day === 'friday')
   console.log('Record videos');
else if (day === 'saturday' || day === 'sunday')
   console.log('Enjoy the weekend');
else
   console.log('Not a valid day!');


// The Conditional (Ternary) Operator

const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) drink2 = 'wine';
else drink2 = 'water';
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/