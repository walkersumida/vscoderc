#!/bin/sh
set -e

cp -f ./src/keybindings.json ~/.config/Code/User/keybindings.json
cp -f ./src/settings.json ~/.config/Code/User/settings.json

echo "Installed the vscode configuration successfully! Enjoy :-)"

