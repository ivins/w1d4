var words = ["ground", "control", "to", "major", "tom"];


function map(arr, func){
  var temp = [];
  arr.forEach(function(word){
    temp.push(func(word));
  });
  return temp;
}

var length = map(words, function(word) {
  return word.length;
});

var upper = map(words, function(word) {
  return word.toUpperCase();
});

var reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(length, [6, 7, 2, 5, 3]);

console.log(upper, [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]);

console.log(reverse, [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]);