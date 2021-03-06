const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const _ = require('lodash');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todo', (req, res) =>{
    var newtodo = new Todo({
        task: req.body.task,
        isCompleted: req.body.isCompleted,
    })

    newtodo.save().then((doc) => {
        res.send(doc)
    }, (err) =>{
        res.status(404).send(err)
    })
})

app.get('/todo', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    },(err) => {
        res.status(404).send(err);
    })
})

app.get('/todo/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }

        res.send({
            todo
        });
    }).catch((e) => {
        res.status(404).send(e);
    })
})

app.delete('/todo/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectId.isValid(id)){
       return res.status(404).send();
    }

    Todo.findByIdAndDelete(id).then((todo) =>{
        if(!todo){
            res.status(404).send();
        }

        res.send({
            todo
        })
    }).catch((e) => {
        res.status(404).send(e);
    })
})

app.patch('/todo/:id', (req, res) => {
    var id = req.params.id;
    var data = _.pick(req.body, ['task', 'isCompleted']);
    
    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(data.isCompleted) && data.isCompleted){
        data.completedAt = new Date().getTime();
    }else{
        data.isCompleted = false;
        data.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {
        $set : data
    },{
        new: true
    }).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }

        res.send({
            todo
        })
    }).catch((e) => {
        return res.status(404).send();
    })
})


app.listen(3000, () => {
    console.log('server started at 3000');
})








