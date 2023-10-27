const { log } = require("node:console");
const fs = require("node:fs");

// writeFileSync
// fs.writeFileSync("text.txt", "Lo siento wilsonnn:((");

// writeFileAsync;
// fs.writeFile(
//   "./billy/text1.txt",
//   "Be careful adam, ADAMMMM!!! ADAMMMMMMMMMM!!!!!",
//   (err) => {
//     if (err) throw err;
//     console.log("A new file has been created in the Billy folder");
//   }
// );

// mkdir
// mkdirSync
// fs.mkdirSync("./billy");

// mkDir
// fs.mkdir("./billy", (err) => {
//   if (err) throw err;
//   console.log("new folder has been created");
// });

// readFile
// const assHole = fs.readFileSync("./billy/text1.txt", "utf-8");
// console.log(assHole);

fs.readFile("./billy/text1.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log("Reading file from Billy folder");
});
