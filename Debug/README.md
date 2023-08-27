# [vscode 调试](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)

调试文件所在位置：`.vscode/launch.json`

## jest 调试

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",    // launch 直接运行文件并调试；还有一个值是 attach，表示调试一个正在运行的程序（比如网页）。
            "name": "Jest Debug 调试",
            "program": "${workspaceFolder}\\node_modules\\jest\\bin\\jest", // 不能是 ${workspaceFolder}\\node_modules\\.bin\\jest
            "args": ["read-all-file-full-name.test"], // 提供给 jest 的参数
        }
    ]
}
```
