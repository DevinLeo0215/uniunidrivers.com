// Call the fetchAndStoreTextFile function to fetch and store the data
function renderDrivers() {
  const drivers = JSON.parse(localStorage.getItem("drivers"));
  console.log(drivers);
}
fetchAndStoreTextFile("drivers", "./burbank/drivers.txt", renderDrivers);
