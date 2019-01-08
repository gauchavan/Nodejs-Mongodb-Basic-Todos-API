const  { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParse: true }, (err, client) => {
    if(err){
        console.log('Unable to connect to mongodb', err)
    }

    console.log('Connected to Mongadb')
    
    const db = client.db('Todos');

    // Delete Many
    // db.collection('Todos').deleteMany({
    //      text: 'Going for a shopping',
    // }).then((result) => {
    //     console.log('Result', result);
    // })
    
    // Delete One
    // db.collection('Todos').deleteOne({text: 'Going for a walk',}).then((result) => {
    //     console.log(result)
    // })

    //FindOneAndDelete
    db.collection('Todos').findOneAndDelete({text : 'Some data'}).then((result) => {
        console.log(result)
    })
})
