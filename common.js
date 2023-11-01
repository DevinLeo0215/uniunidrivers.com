// Function to fetch and store remote text file locally
function fetchAndStoreTextFile(storeKey, txt_url, cb) {
  fetch(txt_url)
    .then((response) => response.text())
    .then((data) => {
      // Split the text content into an array of lines
      const lines = data.split("\n");

      // Process and store the data
      const processedData = processLines(lines);

      // Store the processed lines in local storage
      localStorage.setItem(storeKey, JSON.stringify(processedData));
      cb();
    })
    .catch((error) => {
      console.error("Error fetching the file: ", error);
      cb();
    });
  // Function to process the lines
  function processLines(lines) {
    const processedLines = [];
    let keys = lines[0].split("|");
    console.log(keys);
    for (let i = 1; i < lines.length; i++) {
      let values = lines[i].split("|");
      let objLine = {};
      for (let j = 0; j < keys.length; j++) {
        objLine[keys[j]] = values[j];
      }
      processedLines.push(objLine);
    }
    return processedLines;
  }
}
