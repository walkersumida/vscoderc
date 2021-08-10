const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const homeDir = require('os').homedir();

const vscodeDir = "Library/Application\ Support/Code/User/"

module.exports = {
  mode: 'development',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/settings.json", to: path.join(homeDir, vscodeDir) },
        { from: "./src/keybindings.json", to: path.join(homeDir, vscodeDir) },
      ],
      options: {},
    }),
  ],
}
