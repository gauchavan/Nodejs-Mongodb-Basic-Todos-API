const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '5c357ac2a851e23d13668062';

if(!ObjectID.isValid(id)){
    console.log('Id is not valid');
}

// Find all Object query
Todo.find().then((todos) => {
    console.log('Todos', todos);
})

//Find one object
Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
})

// Find by Id 
Todo.findById(id).then((todo) => {
    if(!todo){
        console.log('Id not found');
    }

    console.log('Todo by Id', todo)
}).catch((e) => {
    console.log('Some error', e);
})