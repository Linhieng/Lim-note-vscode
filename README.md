# 学习使用 vscode

最近时间紧迫，不能分散注意力来弄 vscode 相关内容了，所以需要对遇到的问题进行统计，等有时间时再处理：

TODO:

- [ ] 重新整理 setting 笔记结构，移除一些太过常见的配置项，或者容易可视化操作的配置项，或者见名思意的配置项。
- [ ] 思考默认快捷键内容是否显得凌乱？自定义快捷键放置在 backup 中是否容易出错？
- [ ] 如何禁止 volar 的 onLanguage:markdown 时间，因为它占用了 markdown 中的 ` 等功能。
- [ ] 是否能更改 alt + ~ 的快捷键为定位到当前文件所在文件树位置，而不是简单的聚焦到文件树。
- [ ] 完善自定义的 vscode-extension 插件，实现多行编辑、选中编辑、删除编辑，然后取代默认的符号配对功能。
- [ ] 开发 json 格式化插件，只需要在 vscode 配置文件中自动添加尾随逗号即可，这是目前其他插件没有提供的功能
- [ ] 整理 profile 中插件的使用，不必要的插件不要启动，因为会影响性能（电脑似乎变卡了）
- [ ] 完善 tasks 内容，总结 [该文章](https://juejin.cn/post/7035448197883363359) 中的有用知识点
- [ ] 是否有机会自己提交一个 PR，来~~解决~~我的 [#188736](https://github.com/microsoft/vscode/issues/188736)。其实已经被官方解决了，但我还是觉得我提供提供一个命令😀

## 文件夹说明

folder          | 简介
----------------|----------------------------------------------------------
backup          | vscode 配置的备份。比如 settings, keyboard 和 markdown-preview 样式表
Command-Palette | vscode 命令行（ctrl+shift+p）
Debug           | vscode 调试
Emmet           | vscode 中的 Emmet 语法
Extension       | vscode 插件
IntelliSense    | vscode 智能提示
Keyboard        | vscode 快捷键。自定义快捷键放置在 backup 文件夹中
Profile         | vscode 的 profile
setting         | vscode 的 settings.json 文件相关内容
Snippets        | vscode 代码片段
Tasks           | vscode 任务（task）

## VScode 没有的功能

- 虚拟空格 Virtual Space, 可以允许光标插入到行尾的任意位置 (allow caret placement)。这个功能在绘制一些字符图时很有用。 JetBrains 家的产品（如 IDEA ）是有这个功能的。

## 配置 C 语言运行环境

跟着 [官网教程](https://code.visualstudio.com/docs/cpp/config-mingw) 走就行。

1. 安装 vscode, C/C++ 扩展工具
2. 安装 [MSYS2](https://www.msys2.org/), 直接默认下一步。
3. 在 MSYS2 搭建的终端窗口中运行 `pacman -S --needed base-devel mingw-w64-x86_64-toolchain` 命令，该命令将安装我们所需要的所有工具链。安装途中会两次停顿，直接按下会车键即可。
4. 将 `C:\msys64\mingw64\bin` 添加到系统环境变量中
5. 打开 Window 终端，运行 `gcc --version`, `g++ --version`, `gdb --version` 命令确保成功。
6. 在 vscode 中编写 C/C++ 代码运行看看是否成功。
