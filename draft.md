# 草稿

## 案例解决方案

### 有关 markdown 智能粘贴的那些事

更多信息请查看 [vscode#188736](https://github.com/microsoft/vscode/issues/188736)。这里就直接说我对智能粘贴的处理方案：

首先，配置 `settings.json` 文件：

```json
"markdown.editor.pasteUrlAsFormattedLink.enabled": "always",
// 无论何时，当在 markdown 文档中粘贴一个链接时，都会将其处理为链接格式 —— [text](https://github.com/microsoft/vscode/issues/188736)
```

但有时候我们只想粘贴为纯文本格式，故我们可以为纯文本粘贴提供一个新的快捷键：编辑 `keybindings.json` 文件

```json
    {
        "key": "ctrl+l ctrl+v",
        "command": "editor.action.pasteAs",
        "when": "editorLangId == 'markdown'",
        "args": {
            // 粘贴为纯文本
            "id": "text"
        }
    },
```

现在，当键入 `ctrl+v` 时始终粘贴为链接格式，需要粘贴为纯文本格式时，只需键入 `ctrl+l ctrl+v`。