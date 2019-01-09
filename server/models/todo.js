var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    task: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Date,
        default: null
    }
});

module.exports = {
    Todo
}