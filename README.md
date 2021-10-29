# VSCode vimrc
## Install on macOS

```
sh ./install_vscode_settings_for_macos.sh
```
## Install on Linux

```
sh ./install_vscode_settings_for_linux.sh
```

* Please make a backup of your current configuration files before installing.

## Key Mappings

The leader is `,`, so whenever you see `<leader>` it means `,`.

### File mappings on Explorer

- (a)dd a file: `m a`
- add a (f)older: `m f`
- (r)ename: `m r`
- (d)elete: `m d`
- (c)opy: `m c`
- (p)aste: `m p`

### Editor mappings

- split a editor (h)orizontally: `s h`
- split a editor (v)ertically: `s v`
- Move the cursor to the editor above: `ctrl+k`
- Move the cursor to the right editor: `ctrl+l`
- Move the cursor to the editor below: `ctrl+j`
- Move the cursor to the left editor: `ctrl+h`
- close (o)ther editors: `ctrl+w o`
- close the (c)urrent editor: `ctrl+w c`

### Search Editor mappings

- Search in all files: `<leader>g`
- Open Results in Editor: `<enter>` (on Search Box)
- Go to the target file: `ctrl+]` (on Search Results)

### Terminal mappings

- Focus Next Terminal: `shift+cmd+[` (on Terminal)
- Focus Previous Terminal: `shift+cmd+]` (on Terminal)

![image](https://user-images.githubusercontent.com/12683375/130454994-1dfafb4a-6db1-4756-9753-dcf16e31eccf.png)


- Increase Terminal size: `ctrl+e k` (on Terminal)
- Decrease Terminal size: `ctrl+e j` (on Terminal)

### Normal mode mappings

- Fast saving of a file: `<leader>w`
- Toggle explorer: `<leader>nn`
- Open explorer and focus a current file: `<leader>nf`
- (f)ind a file by name: `ctrl+f`
- Search in a file: `<space>`
  - Focus next a search result: `n`
  - Focus previous a search result: `shift+n`
  - Clear search highlights: `<leader><enter>`
- Jump to definition: `ctrl+]`
- Paste: `p` or `shift+p`

### Visual mode mappings

- Copy: `y`

### Insert mode mappings

- Set to normal mode: `jj`

### Debug mode mappings

- Show Hover: `ctrl+i`

<img width="784" alt="image" src="https://user-images.githubusercontent.com/12683375/129901538-76285a00-56cd-4c97-8f08-948ad0675e89.png">

## Development
### Init

```
yarn install
```

### Run

```
yarn run watch
```