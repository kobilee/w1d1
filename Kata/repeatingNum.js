let repeatNumbers = function(data) {
  // Put your solution here
  var array = []
  result = "";
  for (var i = 0; i < data.length; i ++){
    var num = "";
    var col = data[i][1];
    for (var j = 0; j < col; j++){
        num += data[i][0];
    }
    array.push(num)
  }
  for (i = 0; i < array.length - 1; i++){
    result += array[i] + ", ";
  }
  result += array[array.length - 1];
  return result
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));