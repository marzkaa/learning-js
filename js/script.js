//Zadanie 1

const x = 'Hello';
const y = 'World';
console.log(`${x} ${y}`);

const helloWorld = (x ='Hello', y ='World' ) => console.log(`${x} ${y}`);

//Zadanie 2

const multiply = (x, y = 1) => x * y;
multiply(2, 5);
multiply(6, 6);
multiply(5);

//Zadanie 3
//Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

//Zadanie 5

const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = array;
console.log(`${firstname} ${lastname}`);