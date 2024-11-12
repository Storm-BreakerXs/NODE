const fs = require("fs");

// Create a file with content "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("welcome.txt has been saved!");

  // Read the content from the file
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("Data from welcome.txt:", data);
  });
});
