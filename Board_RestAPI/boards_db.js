const express = require('express');
const path = require('path');
const dotenv = require('dotenv');  
dotenv.config(); 

const app = express();

//  CORS 추가 
const cors = require('cors');
app.use(cors())
 
app.set('port', process.env.PORT||3020);
app.use(express.json()); // json요청을 제대로 받을 수 있다.
app.use(express.urlencoded({ extended: false }));  // node.js 기본으로 내장된 query string 모듈 사용하도록 

const connection = require('./dbconn') ; 
connection.connect();
app.get('/boards', (req, res) => {      //GET       /boards?board_no=1
    req.header("Access-Control-Allow-Origin", "*") ; //  CORS 추가
    
    let board_no = req.query["board_no"]   
    if (board_no) { // board_no 값이 있으면 board_no 글상세 정보 Read     
        connection.query(`SELECT * from test.board where board_no=${board_no} `, 
           (error, rows, fields) => {
            if (error) throw error;   
            console.log( rows); 
            res.json( rows[0] );
        });     
         
    } else {     // board_no 값이 없으면 전체 목록 Read
        connection.query(`SELECT * from test.board  `, 
           (error, rows, fields) => {
            if (error) throw error;   
            console.log( rows); 
            res.json(  rows   );
     }); 
     // res.sendFile(path.join(__dirname,"db/boards.json"))   // path
    }
});  
// app.post('/boards', (req, res) => {  //post 
//     let mem_id = req.body["mem_id"] ;
//     let title = req.body["title"] ;
 
//     connection.query(`INSERT INTO  board  (mem_id,title,text,count,reg_dtm,mod_dtm) 
//                       values ( ${mem_id},  ${title} .. //TODO ...     )`, 
//             (error, results, fields) => {  if (error) throw error;   
            
//             console.log(results , "저장 성공" );  // insert 건수 
//             res.status(200).send("OK") ;
//     });   
// }); 
 
app.delete('/boards', (req, res) => {  //delete     /boards?board_no=1
    req.header("Access-Control-Allow-Origin", "*") ; //  CORS 추가 

    console.log(   ` ${ req.query["board_no"] }  가 삭제 되었습니다. ` )
    res.json( '[{   }]' ) ;   
}); 
 
app.listen(app.get('port'), "database-1.chx35kozl0kv.ap-northeast-2.rds.amazonaws.com", () => { 
    console.log(app.get('port'), '번 포트에서 대기 중');
});
