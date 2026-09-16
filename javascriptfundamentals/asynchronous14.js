const fetchData = () => new Promise(resolve => {
  setTimeout(() => resolve("Andmed käes!"), 1000);
});

async function main() {
  console.log("Start");
  const result = await fetchData();
  console.log(result);
}
main();
