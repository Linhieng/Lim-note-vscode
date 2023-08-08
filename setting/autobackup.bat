@echo off
chcp 65001 > nul

if "%1"=="runtask" goto runtask
    set taskname=自动备份我的配置项
    set bat_path=%0
    set arguments=runtask
    set taskrun=%bat_path% %arguments%
    set schedule=DAILY
    set starttime=21:00
    schtasks /Create /TN "%taskname%" /TR "%taskrun%" /SC "%schedule%" /ST "%starttime%"
    pause
    exit
:runtask

set source_file=%UserProfile%\AppData\Roaming\Code\User\settings.json
set destination=%~dp0

if not exist %source_file% (
    echo "%source_file%" 文件不存在
    pause
    exit
)

COPY "%source_file%" "%destination%" /Y /V

if not ERRORLEVEL 0 (
    echo 拷贝出错
    pause
    exit
)

exit