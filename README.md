                                                 
                                                 node js 入门案例
 
 一、node环境搭建(nodejs 安装)
     
        1.Windows下 安装包(.msi)
            [32 位安装包下载地址](https://nodejs.org/dist/v4.4.3/node-v4.4.3-x86.msi)
            [64 位安装包下载地址](https://nodejs.org/dist/v4.4.3/node-v4.4.3-x64.msi)
        2.检查是否安装好，进入cmd 输入命令node -v查看node版本，输入npm -v 查看npm版本
        3.安装好后在本地新建一个test文件夹 ,在文件夹中安装依赖包，如必要的express包，cmd进入test文件下执行 npm install express --save 
  
    
 二、目录结构  
     node_modules (npm安装的依赖包目录)
     public (存放css,html,js等静态文件)
        indx.js
     routes  (路由) 
        index.js
        login.js
     views  (视图文件)  
        index.html
        login.html
     app.js  （程序的入口文件）
     package.json 配置依赖文件，由npm命令生成 npm init --y
     
     
  三、express框架常用设置
1.通过require()加载了express、path 等模块,以及 routes 文件夹下的index. js和 users.js 路由文件。 下面来讲解每行代码的含义。

2.var app = express(); 生成一个express实例。app.

3.app.set('views', path.join(__dirname, 'views'))；设置views文件夹为存放视图文件的目录，即存放模板文件的目录。_dirname为全局变量，存储当前正在执行的脚本所在的目录。

4.app.set('view engine', 'ejs'); 设置视图模板引擎为ejs

5.app.use(express.static(path.join(__dirname, 'public'))); 设置访问静态的资源（html,js,css）

6.app.use(logger('dev’))：加载日志中间件。

7.app.use(bodyParser.json())：加载解析json的中间件。

8.app.use(bodyParser.urlencoded({ extended: false })); 加载解析urlencoded请求体的中间件

9.app.use(cookieParser())：加载解析cookie的中间件。

10.app.use('/', index);和app.use('/users', users)：路由控制器。

11.app.use(function(req, res, next) {
var err = new Error('Not Found');
err.status = 404;
next(err);
});  捕获404错误，并转发到错误处理器。

12.app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});
开发环境下的错误处理器，将错误信息渲染error模版并显示到浏览器中。



    
