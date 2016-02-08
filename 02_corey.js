//In this folder, run sudo npm install wiring-pi

var wpi = require('wiring-pi');

wpi.setup('gpio');

var pin = 17;

wpi.pinMode(17, wpi.OUTPUT);

value = 1;

setInterval(function() {
  wpi.digitalWrite(pin, value);
  value = +!value;
}, 500);