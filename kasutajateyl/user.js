const users = [
{ id: 1, name: "Mari", age: 22, active: true },
{ id: 2, name: "Jüri", age: 17, active: false },
{ id: 3, name: "Kati", age: 31, active: true },
{ id: 4, name: "Martin", age: 19, active: false },
{ id: 5, name: "Laura", age: 26, active: true }
]

//3.1 kuvab kõikide kasutajata nimed
users.forEach(user => console.log(user.name));

//3.2 leiab kõik aktiivsed kasutajad
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

//3.3 leiab kõik vähemalt 18-aastased
const adults = users.filter(user => user.age >= 18);
console.log(adults);

//3.4 loob uue massiivi ainult kasutajate nimedega
const names = users.map(user => user.name);
console.log(names);

//3.5 leiab kasutaja ID-ga 3
const user3 = users.find(user => user.id === 3);
console.log(user3);

//3.6 näitab, kas kasutaja on aktiivne või mitte
function getUserStatus(user) {
  if (user.active) {
    return "Aktiivne";
  } else {
    return "Mitteaktiivne";
  }
}

console.log(getUserStatus(users[0]));
console.log(getUserStatus(users[1]));

//3.7 tagastab tervituse Marile
const getGreeting = user => `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`;

console.log(getGreeting(users[0]));

//3.8 näitab Mari nime ja vanust
const { name, age } = users[0];
console.log(name, age);

//3.9 Loob uue kasutaja ID-ga 6
const newUser = { id: 6, name: "Karl", age: 24, active: true };
const updatedUsers = [...users, newUser];

console.log(updatedUsers.length);
console.log(users.length);

//3.10 Lisab Marile linna
users[0].address = { city: "Tallinn" };

console.log(users[0].address?.city ?? "Linn puudub");

console.log(users[1].address?.city ?? "Linn puudub");

//3.11 käib kõik kasutajad läbi, et näha nende aktiivsust
users.forEach(user => {
  console.log(`${user.name} – ${getUserStatus(user)}`);
});

//3.12 sorteerib kasutajad noorimast vanimani
const sortedByAge = [...users].sort((a, b) => a.age - b.age);

sortedByAge.forEach(user => console.log(`${user.name}: ${user.age}`));