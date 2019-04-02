const multiplicationTable = function(maxValue) {
  // Your code here
  var array = [];
  var result = "";
  for (var i = 1; i <= maxValue; i ++){
    var num = "";
    for (var j = 1; j <= maxValue - 1; j ++){
      num += (i * j) + ", ";
    }
    num += i * j;
    array.push(num);
  }

  for (i = 0; i < array.length ; i++){
    result += array[i]+ "\n";
  }

  return result
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));