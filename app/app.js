// const http = require('http');
// const app = http.createServer((req,res) => {
//   res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
//    if(req.url === '/'){
//        res.end('여기는 루트 입니다');
//    }else if(req.url === '/login'){
//        res.end('여기는 로그인 입니다');
//   }
// });

// app.listen(3001, () => {
//   console.log('여기는 http로 가동된 서버입니다.');
// });

const express = require('express');
const bodyParser = require("body-parser");
const app = express();

// set 전연변수 선언
app.set('views','./src/views');
app.set('view engine','ejs');


app.use(express.static(`${__dirname}/src/public/`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
// use 미들웨어 사용
const home = require('./src/routes/home');

app.use('/',home);

module.exports = app;