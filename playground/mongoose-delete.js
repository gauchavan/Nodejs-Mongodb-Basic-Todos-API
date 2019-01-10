const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5c357ac2a851e23d13668062'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5c357ac2a851e23d13668062').then((todo) => {
  console.log(todo);
});