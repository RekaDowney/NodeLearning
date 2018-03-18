# NPM 常用命令介绍

## 基本命令

　　`npm`查看`npm`的帮助说明

　　`npm -v`查看`npm`版本

　　`npm verison`打印`npm`、`node`、`v8`等工具、环境的版本号

　　`npm search ${packageName}`搜索包含指定名称的包。或者直接在`https://npm.taobao.org/browse/keyword/vue`上面搜索指定包

　　以上的`search`都可以简写成`s`

　　`npm install ${package}`在当前目录下安装指定包，要求当前目录下存在`package.json`文件

　　`npm install ${package}@${pkgVersion}`在当前目录下安装指定包的指定版本

　　`npm install ${package}@${pkgTag}`在当前目录下安装指定包的指定`tag`版本

　　`npm install -g ${package}`在`Node`安装目录下安装指定包，此安装为全局安装，安装后可以在任意项目中直接引入该包

　　`npm install ${package} --save`在当前目录下安装指定包，并将包写入到`package.json`的依赖配置中

　　`npm install`解析并下载当前目录下`package.json`文件中指定的依赖包

　　以上的`install`都可以简写成`i`

　　`npm remove ${package}`删除当前目录下的指定包，要求当前目录下存在`package.json`文件

　　`npm remove ${package} --save`删除当前目录下的指定包，并将包从`package.json`依赖中移除

　　以上的`remove`都可以简写成`r`

　　`npm list --global`罗列当前`Node`全局安装的包即这些包的依赖包

　　`npm list --global --depth=0`罗列当前`Node`全局安装的包，不展示这些包的依赖包。通过调整`--depth`参数可以修改罗列的依赖包层次。`0`表示不罗列，`1`表示罗列一级依赖包。

　　以上的`--global`都可以简写成`-g`

　　`npm init`通过交互式命令行进行`Node`包配置，最终将配置结果生成`package.json`文件并存储到当前目录下。

　　`npm config set strict-ssl false`关闭`NPM`的`SSL`约束

　　`npm install -g cnpm --registry=https://registry.npm.taobao.org/` 安装`cnpm`包，`cnpm`可以看成是`npm`的别名，它是`NPM`的国内镜像站，用以加速`NPM`包的下载。

　　`cnpm install -g nrm`安装`nrm`包，`nrm`包可以管理`NPM`下载包所使用的下载源。

　　　　`nrm ls`查看当前支持的`NPM`源或者镜像站

　　　　`nrm use ${registry}`切换为指定的`NPM`源或者镜像站


## 特殊技巧

　　`Linux`安装完毕`cnpm`包后，可以通过`alias npm='cnpm'`别名配置`cnpm`，这样以后输入`npm`就会以`cnpm`方式执行命令。注意：此方式在使用`which npm`时搜索出来的命令是原始`npm`而不是`cnpm`路径。

　　`Windows`安装完毕`cnpm`包后，可以通过`@doskey npm=cnpm $*`别名配置`cnpm`，将其写入到某个`bat`文件中，打开注册表，找到`HKEY_CURRENT_USER\SOFTWARE\Microsoft\Command Processor`配置项，有面板新建字符串`AutoRun`，值为`bat`文件的绝对路径。后续开启`CMD`就会自动先执行该`bat`文件进行别名配置。注意：此方式仅对`CMD`有效，`PowerShell`启动时并不会自动执行该`bat`文件。（`PowerShell`起别名的命令为`Set-Alias npm cnpm`）

