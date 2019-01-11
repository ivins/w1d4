var countdownGenerator = function (x) {
  var count = x+1;
  return function (){
    if (count > 1) {
      count -= 1;
      return console.log("T-minus " + count + "...");
    } else if (count === 1){
      count -= 1;
      return console.log("Blast Off!");
    } else {
      return console.log("Rockets already gone, bub!");
    }
  };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
