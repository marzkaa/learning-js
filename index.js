/* var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
}); */


var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, data) {
    if (err) throw err;
    console.log('Zawartość katalogu zapisano do pliku nowy.txt'.blue);
    console.log(data);
    fs.writeFile('./nowy.txt', data, function(err) {
      if (err) throw err;
      console.log('Zapisano!'.blue);
    }); 
  });