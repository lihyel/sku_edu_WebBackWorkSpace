const express = require("express") //모듈 import

const app = express() // express web server 생성

app.set('port', process.env.PORT || 3020);
                        // 환경변수 PORT가 잇으면 그 포트 사용하고, 없으면 3020 포트 사용
                    
// Get Method 요청 시
app.get("/", (req, res) => {
    res.send("<h1> Hello Express </h1>");
});

app.listen(app.get('port'), () => {  // express web server start
    console.log(app.get('port'), '번 포트에서 대기 중');
})