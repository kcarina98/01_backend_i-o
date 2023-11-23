import { numbers, names, Input1, Input2 } from "./data.js";

const copyNames = [];
const copyNumbers = [];

//erster Wert aus Array
export function firstElement() {
  return console.log(
    copyNames.concat(names).shift(),
    copyNumbers.concat(numbers).shift()
  );
}

// alle außer der letzte Wert
export function notLast() {
  return console.log(
    copyNames.concat(names).slice(0, 3),
    copyNumbers.concat(numbers).slice(0, 15)
  );
}

// der letzte Wert aus Array
export function lastElement() {
  return console.log(
    copyNames.concat(names).pop(),
    copyNumbers.concat(numbers).pop()
  );
}

// alle außer der erste Wert
export function notFirst() {
  return console.log(
    copyNames.concat(names).slice(1, 4),
    copyNumbers.concat(numbers).slice(1, 16)
  );
}

// "remove" wird gelöscht und restliches Array ausgegeben
export function Remove() {
  return console.log(Input1.shift(), Input1.pop(), Input1);
}

//doppelte Zahlen werden gelöscht
export function Single() {
  return console.log([...new Set(Input2)]);
}

// summe von numbers
export function Summe() {
  return console.log(numbers.reduce((acc, cur) => acc + cur, 0));
}

// Random Zahl zwischen den Parametern auf ganze Zahlen gerundet
export function Between(a, b) {
  return console.log(Math.floor(Math.random() * (b - a)) + a);
}

// erster Buchstabe groß
export function UpperCase(string) {
  return console.log(string.charAt(0).toUpperCase() + string.slice(1));
}

// alles groß geschrieben
export function AllUpperCase(string) {
  return console.log(string.toUpperCase());
}

// ist der Buchstabe im string?
export function Inside(string, letter) {
  return console.log(string.toLowerCase().includes(letter));
}
