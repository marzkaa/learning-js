const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://kondrad:test@cluster0-8oox5.mongodb.net/test?retryWrites=true&w=majority',{ 
     useNewUrlParser: true  
});

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, function() {
    console.log('listening on 3000')
  })