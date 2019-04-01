process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    
    if (input !== null) {
      var instructions = input.toString().trim();
      switch (instructions) {
        case '/exit':
          process.stdout.write('Quitting app!\n');
          process.exit();
          break;

        case '/version':
          process.stdout.write('Your node version is: ' + process.versions.node + '\n');
          process.stdout.write('Your language is: ' + process.env.lang) + '\n';
          break;

        default:
          process.stderr.write('Wrong instruction!\n'); 
      }
    }
});