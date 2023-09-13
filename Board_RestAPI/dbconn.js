const mysql  = require('mysql');
const dotenv = require('dotenv');  
dotenv.config();   

const connection = mysql.createConnection({
    host: process.env.DBHost, 
    port:process.env.DBPort, 
    user: process.env.DBUser, 
    password: process.env.DBPass, 
});
    
// connection.connect();
    
// connection.query('SELECT * from test.board', (error, rows, fields) => {
//     if (error) throw error;

//     console.log(  rows);
//     console.log(  rows[0].title );  // 안녕 

//     json =  JSON.stringify ( rows  )  ;  //json으로 변경 
// });

// connection.end();

// 이 코드가 없으면?
//'npm start' 했을 때 ("TypeError: connection.connect is not a function") 이런 에러가 발생함
// 이 오류는 connection 객체에 connect 메서드가 없다는 의미. 
module.exports = connection ;