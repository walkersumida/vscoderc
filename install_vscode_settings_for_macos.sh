#!/bin/sh
set -e

cp -f ./src/keybindings.json ~/Library/Application\ Support/Code/User/keybindings.json
cp -f ./src/settings.json ~/Library/Application\ Support/Code/User/settings.json

echo "Installed the vscode configuration successfully! Enjoy :-)"

