const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParse: true}, (err, client) => {
    if(err){
        console.log('Unable to connect to mongodb', err)
    }

    console.log('Connected to Mongadb');

    // const db = client.db('Todos');
    const db1 = client.db('Users');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c34238c6fc80139e197f621')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal : true
    // }).then((res) => {
    //     console.log(res);
    // })

    db1.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5c34238c6fc80139e197f622')
    }, {
        $set : {
            name : 'Vikas Singh'
        },
        $inc : {
            age : -1
        }
    }, {
        returnOrginal : true
    }).then((res) => {
        console.log(res);
    })

})