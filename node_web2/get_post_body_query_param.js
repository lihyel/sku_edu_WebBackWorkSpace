const express = require("express")
const app = express()  
const path = require('path')
app.set('port', process.env.PORT || 3020);

app.use(express.json());//버전 4.16 이후부터 사용가능, json요청을 제대로 받을 수 있다.
app.use(express.urlencoded({ extended: false })); // node.js 기본으로 내장된 query string 모듈 사용하도록      

//1) JSON 형태로 온 요청 body 읽기
app.post("/students", (req,res) => {
    let name = req.body["name"]
    res.send(`${name } <h1> /students </h1>`)
});

//2) QueryString
//요청 url : http://localhost:3020/students?id=100&name=lee
app.get("/students", (req,res)=>{
    let id = req.query["id"]
    let name = req.query["name"]

    res.send(`${id} ${name} <h5> get /students?id=100&name=lee </h5>`);
});

//3) Parameter
//요청 url :http://localhost:3020/students/100/lee
app.post("/students/:id/:name", (req,res) => {
    let id = req.params["id"]
    let name = req.params["name"]

    res.send(`${id} ${name} <h1> post /students/:id/:name </h1>`);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});