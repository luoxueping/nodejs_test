    # node js 入门案例
    
    ##node环境搭建(nodejs 安装)
    >Windows 安装包(.msi)
    >>[32 位安装包下载地址](https://nodejs.org/dist/v4.4.3/node-v4.4.3-x86.msi)
    >>[64 位安装包下载地址](https://nodejs.org/dist/v4.4.3/node-v4.4.3-x64.msi)
    >>检查是否安装好，进入cmd 输入命令node -v查看node版本，输入npm -v 查看npm版本
    >>安装好后在本地新建一个test文件夹 ,在文件夹中安装依赖包，如必要的express包，cmd进入test文件下执行 npm install express --save 
  
    
    ##案例目录
    >代码结构  
    >>node_modules(npm安装的依赖包目录)
    >>public(存放css,html,js等静态文件)
    >>>indx.js
    >>routes(路由) 
    >>>index.js
    >>>login.js
    >>views(视图文件)  
    >>>index.html
    >>>login.html
    >>app.js（程序的入口文件）
    >>package.json配置依赖文件，由npm命令生成 npm init --y
    
