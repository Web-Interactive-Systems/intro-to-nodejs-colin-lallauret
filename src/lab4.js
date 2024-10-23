/**
 Todo: Complete this lab 

 - Add a new task in scripts of package.json to run `lab4.js`
 - Use argv of process module to get `filename` (a path to an existing file './utils/content.txt') and `text` (a text)
 - Use writeFile of fs module to write text in filename
 - Use readFile of fs module to read nameFile
 */

const fs = require("fs");

// argv [0] -> node
// argv [1] -> "src/lab4.js"
// argv [2] -> filename
// argv [3] -> content

const filename = process.argv[2];
const content = process.argv[3];

console.log("argv", process.argv);

// Todo writeFile
fs.writeFile(filename, content, (err) => {
  if (err) {
    console.error("err", err);
  } else {
    console.log("\n\n *** file saved!!");
  }
});

// Todo readFile

// Execute !
// yarn lab4 src\utils\content.txt "testyutsutgyu"
