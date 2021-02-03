const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const router = require('./routes/task-routes')
var app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.send('Hello World')
})

app.use('/tasks',router)

mongoose.connect("mongodb+srv://task-list-db:task-list-db-123@cluster0.nno76.mongodb.net/task-app-db?retryWrites=true&w=majority", {useNewUrlParser: true});
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});