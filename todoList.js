const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended : true }));

let id = 2;

const todoList = [
    {
        id : 1,
        content : "할일1",
        done : false
    }
];

router.get('/', function(req, res){

    res.json(todoList);

});

router.post('/', function(req, res) {

    const { content, done } = req.body;
    todoList.push({
 
        id : id++,
        content,
        done,

    })

    return res.send('sucess');

})

module.exports = router;