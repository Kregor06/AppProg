const names = ["Kregor", "Gregor"];
names.push("Jaan");
const last = names.pop();

for (const name of names) {
  console.log(name);
}

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Mati") break;
  console.log(names[i]);
}
