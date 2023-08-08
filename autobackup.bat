@echo off
chcp 65001 > nul

if "%1"=="runtask" goto runtask
    set taskname=自动备份 vscode 配置
    set bat_path=%0
    set arguments=runtask
    set taskrun=%bat_path% %arguments%
    set schedule=DAILY
    set starttime=21:00
    schtasks /Create /TN "%taskname%" /TR "%taskrun%" /SC "%schedule%" /ST "%starttime%"
    pause
    exit
:runtask

set vscode_path=%UserProfile%\AppData\Roaming\Code\User
set snippets=%vscode_path%\snippets\我的代码片段.code-snippets
set settings=%vscode_path%\settings.json
set keybindings=%vscode_path%\keybindings.json
set file_list=%snippets% %settings% %keybindings%
set destination=%~dp0\backup\

if not exist %destination% (
    mkdir %destination%
)

for %%f in (%file_list%) do (
    if exist %%f (
        COPY "%%f" "%destination%" /Y /V
    ) else (
        echo %%f 文件不存在
    )
)

exit