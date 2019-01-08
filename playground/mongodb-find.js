const  { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParse: true }, (err, client) => {
    if(err){
        console.log('Unable to connect to mongodb', err)
    }

    console.log('Connected to Mongadb')

    const db = client.db('Todos');
    // db.collection('Todos').insertOne({
    //     text: "Some data",
    //     completed: false
    //  },(err, result) => {
    //     if(err){
    //         console.log('Unable to insert in Todos', err);
    //     }
    
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //  })
    
    //  const db1 = client.db('Users');
    //  db1.collection('Users').insertOne({
    //     name: 'Gauri Chavan',
    //     age: 26,
    //     location: 'Boston',
    //  },(err, result) => {
    //     if(err){
    //         console.log('unable to insert in Users', err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined, 2));
    //  })
    
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('unable to fetch todos', err)
    // })
    
    // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('unable to fetch todos', err)
    // })
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c34238c6fc80139e197f621')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('unable to fetch todos', err)
    // })
    
    // db1.collection('Users').find({
    //     name : 'Gauri Chavan'
    // }).toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('unable to fetch todos', err)
    // })
    
    db.collection('Todos').find().count().then((c) => {
        console.log('Total Count', c);
    },(err) => {
        console.log('unable to fetch todos', err)
    })
    
    
        client.close()
})
