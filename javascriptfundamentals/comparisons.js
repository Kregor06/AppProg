const age = 20;
const isLoggedIn = true;

if (age >= 18 && isLoggedIn) {
  console.log("Sisse logitud");
} else if (!isLoggedIn) {
  console.log("Palun logi sisse");
} else {
  console.log("Liiga noor");
}

const message = (age >= 18 && isLoggedIn) ? "Tere tulemast!" : "Ligipääs keelatud!";
console.log(message);