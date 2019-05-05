var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get("/", function(req, res) {
  res.render("sign_in");
});

app.get("/auth/google", function(req, res) {
  res.render("logged", {
    login: req.query.login
  });
});


var port = 9000;
app.listen(port, function(){
  console.log('listening on ' + port + '...')
});

app.use(function (req, res, next) {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});