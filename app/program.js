process.stdin.setEncoding('utf-8');
var OSinfo = require('../modules/OSinfo');
var time = require('../modules/time');

process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.trim();
    switch (instruction) {
      case '/node-version':
        process.stdout.write('Node version is: ' + process.versions.node);
        break;
      case '/system-language':
        process.stdout.write('System language is ' + process.env.lang);
        break;
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      case '/sysOSinfo':
        OSinfo.print();
        time.convertTime();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    };
  }
});