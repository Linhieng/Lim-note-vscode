# vscode 中的任务

## 重定向 C 语言文件输入

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build",
            "type": "shell",
            "command": "C:\\msys64\\mingw64\\bin\\gcc.exe",
            "args": [
                "-fdiagnostics-color=always", // 在终端上显示彩色的诊断信息
                // "-g", 要调试时开启此参数, 开启后生成的文件会更大
                "${file}",
                "-o",
                "${fileDirname}\\${fileBasenameNoExtension}" // 如果不想在看见 exe 文件, 可以输出到其他为止, 然后注意下面的 run 也要修改执行的路径

            ],
            "options": {
                "cwd": "${workspaceFolder}"
            }
        },
        {
            "label": "run",
            "type": "shell",
            // 重定向标准输入
            "command": "type input.txt | ${fileDirname}/${fileBasenameNoExtension}.exe",
            "options": {
                "cwd": "${fileDirname}"
            }
        },
        {
            "label": "build-and-run",
            "dependsOn": [ "build", "run" ] // 依次执行 build 和 run 任务
        }
    ]
}
```

可以添加快捷键，目前 vscode 不支持 `.vscode/keybindings.jsonc`, 未来也大概率不会支持，详细请见 [issue 4504](https://github.com/Microsoft/vscode/issues/4504)。

```jsonc
[
    {
        "key": "ctrl+shift+alt+a",
        "command": "workbench.action.tasks.runTask",
        "args": "build-and-run" // 对应 task 中的 label
    }
]
```
