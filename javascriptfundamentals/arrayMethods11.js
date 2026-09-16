const products = [
  { id: 1, name: "Särk", price: 20 },
  { id: 2, name: "Püksid", price: 50 }
];

const names = products.map(p => p.name);
const cheap = products.filter(p => p.price < 30);
const match = products.find(p => p.id === 2);
const missing = products.find(p => p.id === 99);

console.log(names);
console.log(cheap);
console.log(match);
console.log(missing);
