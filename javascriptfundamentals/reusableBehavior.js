function greet(name = "Külaline") {
  return `Tere, ${name}!`;
}

const index1 = greet("Kregor");
const index2 = greet();

console.log(index1);
console.log(index2);