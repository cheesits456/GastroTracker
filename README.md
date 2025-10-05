# Electron App Template

## Steps to take when configuring new repository with template

1. Initialize repository:

```bash
npm init
```

2. Install `electron` and `electron-packager` globally:

```bash
npm i -g electron electron-packager
```

3. Modify the `scripts` object in `package.json`:

```json
  "scripts": {
    "compile": "./compilers/compile.sh",
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
