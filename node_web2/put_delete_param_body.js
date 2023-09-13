const express = require("express")
const app = express()  
const path = require('path')
app.set('port', process.env.PORT || 3020);

app.use(express.json());//버전 4.16 이후부터 사용가능, json요청을 제대로 받을 수 있다.
app.use(express.urlencoded({ extended: false })); // node.js 기본으로 내장된 query string 모듈 사용하도록 

 
// Parameter
// 요청 url : http://localhost:3020/students/100 
app.delete("/students/:id", (req,res) =>  {  
   let id = req.params["id"] 
   res.send(`${id}   <h1> delete test </h1>`)
});

// Parameter & body
// 요청 url : http://localhost:3020/students/1/kim
app.put("/students/:id/:name", (req,res) =>  {  
    let id = req.params["id"] 
    let name = req.body["name"]
    res.send(`${id} ${name} <h1> put test  /students/:id/:name</h1>`)
});
 
 
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});