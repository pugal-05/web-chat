const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
    host: 'root',
    user: 'localhost',
    password: '1234',
    database: 'login'
});

app.connect((err)=>{
    if (err) {
        console.error(err.stack);
        return;
    };
    console.log('connect db successful'+db.threadId);
});

app.get('/', (req, res)=> {
    db.query((err,result) => {
        if (err) {
            console.error(err.stack);
            res.status(500).send();
            return;
        }
        res.json(result);
    });
});

const port = 3000;
app.listen(port);