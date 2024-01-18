# 草稿

## 案例解决方案

### 有关 markdown 智能粘贴的那些事

更多信息请查看 [vscode#188736](https://github.com/microsoft/vscode/issues/188736)。这里就直接说我对智能粘贴的处理方案：

首先，配置 `settings.json` 文件：

```json
"markdown.editor.pasteUrlAsFormattedLink.enabled": "always",
```

此时不管你想要想要，当你粘贴一个链接时，vscode 都会将其处理为 markdown 链接。当我们只想粘贴一个纯文本链接时，这个功能就会变得适得其所。为此我们可以为纯文本粘贴提供一个新的快捷键：编辑 `keybindings.json` 文件

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

现在，我们就可以使用 `ctrl+l ctrl+v` 粘贴纯文本了。
