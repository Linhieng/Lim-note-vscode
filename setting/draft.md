# 草稿

```jsonc
"explorer.fileNesting.enabled": true,
"explorer.fileNesting.expand": false,
"explorer.fileNesting.patterns": {
    "*.js": "$(capture).js.map, $(capture).*.js",
    "*.ts": "$(capture).ts.map, $(capture).*.ts",
    "*.tsx": "$(capture).tsx.map, $(capture).*.tsx",
    ".gitignore": ".gitattributes",
    ".eslintrc.js": ".eslintignore, .prettierignore, .prettierrc, commitlint.config.js",
    "README.md": "*.md, LICENSE",
    "tsconfig.json": "tsconfig.*.json, jsconfig.json",
    "package.json": ".npmrc, pnpm-workspace.yaml, logo.svg, lerna.json"
},
```
