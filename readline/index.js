const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

rl.question("Siapa namamu tuan? ", (nama) => {
  console.log(`Namaku ${nama}`);
  rl.question(`${nama} siapa? `, (ans) => {
    console.log(`${ans}uatu hari tanpa sengaja`);
    rl.close();
  });
});
