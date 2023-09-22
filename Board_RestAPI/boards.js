// const express = require('express');
// const path = require('path');
// const dotenv = require('dotenv');  
// dotenv.config(); 

// const app = express();
// app.set('port', process.env.PORT||3020);
// app.use(express.json()); // json요청을 제대로 받을 수 있다.
// app.use(express.urlencoded({ extended: false }));  // node.js 기본으로 내장된 query string 모듈 사용하도록 

// const connection = require('./dbconn') ; 
// connection.connect();

// app.get('/boards', (req, res) => {      //GET       /boards?board_no=1
//     let board_no = req.query["board_no"]   
//     if (board_no) { // board_no 값이 있으면 board_no 글상세 정보 Read     
//         connection.query(`SELECT * from test.board where board_no=${board_no} `, 
//            (error, rows, fields) => {
//             if (error) throw error;   
//             console.log( rows); 
//             res.json(  rows[0]  );
//         });     
//         // connection.end();  // 이 부분 주석 처리 또는 삭제해 주세요.. 
//     } else {     // board_no 값이 없으면 전체 목록 Read
//         // 이  부분을 완성하세요 
//         // db/boards.json 대신 DB 조회 결과를 보내도록.... 
//         //res.sendFile(path.join(__dirname,"db/boards.json"))    
//         connection.query('SELECT * FROM test.board',
//             (error, rows, fields) => {
//                 if (error) throw error;
//                 console.log(rows);
//                 res.json(rows);
//             });
//     }
// });  

// app.post('/boards', (req, res) => {  //post 
//     let mem_id = req.body["mem_id"] ;
//     let title = req.body["title"] ;
//     let text = req.body["text"]
 
//    connection.query(`INSERT INTO  test.board (mem_id, title, text) 
//                       VALUES ( '${mem_id}',  '${title}', '${text}' )`, 
//             (error, results, fields) => {  if (error) throw error;   
            
//             console.log(results , "저장 성공" );  // insert 건수 
//             res.status(200).send("OK") ;
//     });      
    
// });  

// //  완성하세요  
// app.delete('/boards', (req, res) => {  //delete     /boards?board_no=1
//     let board_no = req.query["board_no"];

//     connection.query(`DELETE FROM test.board WHERE board_no = ${board_no}`,
//     (error, results, fields) => {
//         if (error) throw error;
//         console.log(   ` 게시물 ${ req.query["board_no"] }  가 삭제 되었습니다. ` )
//         res.json({message: ' 게시물 ${board_no} 가 삭제되었습니다.' }) ;   
//     }); 
// }); 

// app.listen(app.get('port'), () => {  
//     console.log(app.get('port'), '번 포트에서 대기 중');
// });    