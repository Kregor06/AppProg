const name = {
  name: "Kregor",
  stats: { visits: 0 }
};

const city = name?.address?.city;
const visits = name.stats.visits ?? 10;
const visitsOr = name.stats.visits || 10;

console.log(city, visits, visitsOr);
