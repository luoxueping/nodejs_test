var express=require('express');
var ejs=require('ejs');
var path=require('path');

var indexRouter=require('./routes/index');
var login=require('./routes/login');
var app=express();
//app.use('/', indexRouter);s
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8888);
indexRouter.router(app);
login.login(app);
console.log("server has started");

