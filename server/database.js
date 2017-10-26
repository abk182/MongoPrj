const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/store';

let connection = null;

module.exports = {
    connect: (serverStart) =>{
        if(connection) return serverStart();
        MongoClient.connect(url,(err,db)=>{
            if (err) return console.log(err);
            serverStart();
            connection = db;
        });
    },
    get: ()=>{
        if(!connection) {
            throw new Error('Call connect first!');
        }
            return connection;
        }
};