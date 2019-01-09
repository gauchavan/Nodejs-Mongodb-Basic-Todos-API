var mongoose = require('mongoose');

var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// var newUser = new User({
//     email: ''
// })

// newUser.save().then((res) => {
//     console.log('Data Saved', res)
// }, (err) => {
//     console.log('Error', err)
// })

module.exports = {
    User
}