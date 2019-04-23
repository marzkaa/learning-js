//Zadanie 1

const x = 'Hello';
const y = 'World';
console.log(`${x} ${y}`);

/* const helloWorld = (h ='Hello', w ='World' ) => console.log(`${h} ${w}`); ??*/

//Zadanie 2

const multiply = (x = 1, y = 1) => console.log(`${x * y}`);
multiply(2, 5);
multiply(6, 6);
multiply(5);

//Zadanie 3
const average = (...arr) => arr.reduce((prev, next) => prev + next)/ arr.length;
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));


//Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//Zadanie 5

const array = [ 1, 4, 'Iwona', false, 'Nowak'];
[, , firstname, , lastname] = array;
console.log(firstname, lastname);