const express=require('express');
const Router=require('./router/router');
const cors=require('cors');
const bodyParser=require('body-parser');
var log4js = require('log4js');
const app=express();
app.use('/user/:id',express.static('../public'));
app.use('/',express.static('../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(Router.router);
app.use((req,res,next)=>{
	next();
})
app.use(log4js,log4js.connectLogger(Router.logger,{level: 'debug', format: ':method :url'}));
// app.get('/user/:id',(req,res)=>{
// 	console.log(req.params);
// 	res.send('成功')
// })
// app.get('/user/:id',(req,res)=>{
//     console.log(req.params);
	
//     res.send('主页')
// })

app.listen(8080,()=>{
	console.log('serve is running:http://127.0.0.1')
})
