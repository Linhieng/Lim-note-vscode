[我自定义的快捷键在这里](../backup/keybindings.json)

## 🍕 when 表达式

when 表达式中的大部分条件操作符和 JavaScript 语法一致。需要注意的只有 `=~`, 该操作符用于匹配正则。此外还有 `in` 和 `not in` 操作符，和 Python 的类似。

when 表达式的左值有很多，目前只记录一些我用到的。至于右值，基本是和左值相关联的。[点击前往官方文档查看完整的可选值](https://code.visualstudio.com/api/references/when-clause-contexts#available-context-keys)。

推荐在 `keybindings.json` 文件夹中编写 when 表达式，然后在 keyboard shortcuts 中（ctrl+k,s）查看 when 表达式是否正确显示，如果没有显示，则说明表达式语法出现错误。

### 案例

| Example                                   | 说明                                                                   |
|-------------------------------------------|----------------------------------------------------------------------|
| `activePanel == 'workbench.panel.output'` | 要求 “OUTPUT” 面板显示                                                 |
| `editorLangId == 'python'`                | 只在 Python 文件中生效                                                 |
| `resourceFilename =~ /.*\\.py/i`          | 只在文件名以 `.py` 结尾的文件中生效（可用 `resourceExtname` 代替该正则） |
| `!editorHasSelection`                     | 要求没有选中任何文本                                                   |
