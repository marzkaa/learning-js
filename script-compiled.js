'use strict';

//Zadanie 1

var x = 'Hello';
var y = 'World';
console.log(x + ' ' + y);

/*  const helloWorld = (h ='Hello', w ='World' ) => console.log(`${h} ${w}`);  */

//Zadanie 2

var multiply = function multiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log('' + x * y);
};
multiply(2, 5);
multiply(6, 6);
multiply(5);

//Zadanie 3
var average = function average() {
  for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  return arr.reduce(function (prev, next) {
    return prev + next;
  }) / arr.length;
};
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//Zadanie 5

var array = [1, 4, 'Iwona', false, 'Nowak'];
firstname = array[2];
lastname = array[4];

console.log(firstname, lastname);
