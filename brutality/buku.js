const fs = require("node:fs");
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

rl.question("Judul buku: ", (judulBuku) => {
  rl.question("Tahun terbit: ", (tahunTerbit) => {
    const buku = {
      judulBuku: judulBuku,
      tahunTerbit: tahunTerbit,
    };

    fs.readFile("./buku/data-buku.json", "utf-8", (err, data) => {
      if (err) throw err;
      const dataBuku = JSON.parse(data);
      dataBuku.push(buku);
      console.log(dataBuku);
      fs.writeFile("./buku/data-buku.json", JSON.stringify(dataBuku), (err) => {
        if (err) throw err;
        console.log("new data has been added");
        rl.close();
      });
    });
  });
});
