
//데이터베이스에서 정보를 읽어와아 하기 떄문에 database.json 파일에 접근할 수 있는 라이브러리 불러오는 변수
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//파일 읽어오는 변수
const data = fs.readFileSync('./database.json');
//데이터 파싱해서 들고옴
const conf = JSON.parse(data);
const mysql = require('mysql');

//연결과 관련된 변수 설정
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/api/customers', (req,res) => {
    connection.query(
      "SELECT * FROM CUSTOMER",
        (err, rows, fields) =>{
          res.send(rows);
        }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));