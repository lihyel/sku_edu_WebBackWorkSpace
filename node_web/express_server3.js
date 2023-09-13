const express = require("express")
const app = express()  
app.set('port', process.env.PORT || 3020);


app.get("/students", (req,res) =>  {  
     res.json([{ id: 1, name: "daisy" }]);   // 자바스크립트 객체를 JSON 문서로 응답
});


app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});