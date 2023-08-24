const express = require('express');
const cors = require('cors');
const path = require('path'); 
const PORT = process.env.PORT || 8080;
const app = express();

const todoRouter = require('./todoList');


app.use(cors());

app.get('/' , function(req, res, next){

    res.send('구동중');
})

app.use('/api/todoList' , todoRouter);

app.listen(PORT , () => {

    console.log(`${PORT} node_server 구동`);
})