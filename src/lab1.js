/**
 Todo: create a function that sets a timeout of 3000ms and 
  do the following inside its callback:
  - console.table an array of elements
  - console.log __dirname
  - console.log __filename
  - console.log require
  - console.log module
  - console.log process
  - console.log window
 */

const elements = ["element1", "element2", "element3"];
console.table(elements);
console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);
console.log(window);
