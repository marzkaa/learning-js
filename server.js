var express = require('express');
var app = express();

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.use('/user', function (req, res, next) {
    console.log('Autoryzacja użytkownika...')
    next()
  }, function (req, res, next) {
    console.log('Sprawdzanie uprawnień')
    next()
  })

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/user', function (req, res) {
    res.send('Pomyślna autoryzacja użytkownika');
});

var port = 9000;
app.listen(port, function(){
  console.log('listening on ' + port + '...')
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});