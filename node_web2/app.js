const express = require('express');
const path = require('path');

/* dotenv 라이브러리는 아무 설정을 하지 않으면 
현재 디렉토리에 위치한 .env 파일로 부터 환경 변수를 읽어옴
.env 파일을 생성하고, 그 안에 필요한 환경 변수를 키=값의 포맷 */
const dotenv = require('dotenv');
dotenv.config();   

const app = express();
app.set('port', process.env.PORT);

/* image, css 등 정적 파일의 위치 설정 */
app.use('/', express.static(path.join(__dirname, 'public'))); 

/* 
Expressjs에서 JSON Request Body 파싱하기
json으로 이루어진 Request Body를 받았을 경우, 
요청값을 제대로 받아오지 못하는 문제가 발생한다.
--> 해결방법  app.use(express.json());
*/
app.use(express.json());//버전 4.16 이후부터 사용가능, json요청을 제대로 받을 수 있다.
app.use(express.urlencoded({ extended: false })); // node.js 기본으로 내장된 query string 모듈 사용하도록 


const indexRouter = require('./routes'); //    ./routes/index.js     
const userRouter = require('./routes/user');  //  ./routes/user.js
 
app.use('/', indexRouter);    // url /  로 요청이 오면 indexRouter로 
app.use('/user', userRouter); // url /user  로 요청이 오면 userRouter 로 
app.use((req, res, next) => { // 그 외 url 로 요청이 오면 404. 'Not Found'  
    res.status(404).send('Not Found'); 
});
app.use((err, req, res, next) => {   // error 가 발생했을 때 
    console.error(err); 
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => { 
    console.log(app.get('port'), '번 포트에서 대기 중');
});