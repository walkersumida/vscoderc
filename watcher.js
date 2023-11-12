const fs = require("fs");
const path = require("path");
const homeDir = require('os').homedir();
const vscodeDir = "Library/Application\ Support/Code/User/"

function watch(target) {
  fs.watch(target, (event, filename) => {
    if (filename !== 'keybindings.json' && filename !== 'settings.json') return;

    fs.copyFile(path.join(__dirname, 'src', filename), path.join(homeDir, vscodeDir, filename), (err) => {
      if (err) throw err;

      console.log(`${filename} was copied and the contents reflected.`);
    })
  })
}

watch(__dirname + "/src/")
