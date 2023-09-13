const express = require("express")
const path = require("path")
const app = express()

const cors = require("cors")
app.use(cors()); // 모든 접근 허용

app.set('port', process.env.PORT || 3020);

app.get("/students", (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    return res.sendFile(path.join(__dirname, './db/data.json'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});