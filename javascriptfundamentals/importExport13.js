//Eraldi failid

//helpers.js
export const add = (a, b) => a + b;
export default function log(value) {
  console.log(value);
}

//main.js
import Log, { Add } from './helpers.js';
Log(add(2, 3));
