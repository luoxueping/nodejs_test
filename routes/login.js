var querystring = require('querystring');
var login=function(app){
	app.post("/login",function(req,res,next){
		if (req.url === '/login' && req.method === 'POST') {
			var data = '';
			req.on('data', function (chunk) {
		        // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
		        data += chunk;
		    });
		     req.on('end', function () {
		     	data = decodeURI(data);
		     	var dataObject = querystring.parse(data);
		     	if(dataObject.username=="罗雪平" && dataObject.password=="133879"){
		     		res.render('login',dataObject);
		     	}else{
		     		res.send("用户名或密码错误！");
		     	}
		        
		     });
		}
	
	});
};
exports.login=login;