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
*/

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