'use strict';

var output = document.getElementById('output');
var buttonF = document.getElementById('F-converter-button');
var buttonC = document.getElementById('C-converter-button');

output.innerHTML = 'Click the button to convert temperature!';  

function roundNum(value) {
  return Math.round(value * 10) / 10;
}
function convertTempToF(tempC) {
  return roundNum(tempC * 1.8 + 32);
}
function convertTempToC(tempF) {
  return roundNum((tempF - 32) / 1.8);
}
function newLine() {
  return output.innerHTML += '<br><br>'
}

function displayResultsTemperature(temp, tempC, tempF) {
  output.innerHTML = temp == 'numC' ?  'It\'s ' + convertTempToF(tempC) + 'F' : 'It\'s ' + convertTempToC(tempF) + '°C';
}

function physicalStateOfWater(tempC) {
  output.innerHTML += 'The water is in: ';
  if (tempC <= 0) {
    output.innerHTML += ' solid state';
  } 
    else if ((tempC > 0 ) && (tempC < 100)) {
      output.innerHTML += ' liquid state';
    } 
    else {
      output.innerHTML += ' gas state';
    }
}

buttonF.addEventListener("click", function() {
  var tempC = parseFloat(window.prompt('Type the temperature in °C'));
  var tempF = convertTempToF(tempC);
    if (isNaN(tempC)) {
      output.innerHTML = 'Please give a valid number.';
    }
    else {
      newLine(); 
      displayResultsTemperature('numC', tempC, tempF);
      newLine();
      physicalStateOfWater(tempC);    
    }
});

buttonC.addEventListener("click", function() {
  var tempF = parseFloat(window.prompt('Type the temperature in F'));
  var tempC = convertTempToC(tempF);
    if (isNaN(tempF)) {
      output.innerHTML = 'Please give a valid number.';
    }
    else {
      newLine();
      displayResultsTemperature('numF', tempC, tempF);
      newLine();
      physicalStateOfWater(tempC);    
    }
});



