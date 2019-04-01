var os = require('os');


function convertTime(osTime) {
    var hours = Math.floor(osTime / 3600);
    var minutes = Math.floor((osTime % 3600) / 60);
    var seconds = Math.floor((osTime % 3600) % 60);

    return hours + 'h ' + minutes + 'm ' + seconds + 's';
}

exports.convertTime = convertTime;