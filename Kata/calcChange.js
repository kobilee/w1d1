let calculateChange = function(total, cash) {
  // Your code here
var bills = {twenty : 2000, ten : 1000, five : 500, twoDollar : 200, dollar : 100, quarter : 25, dime : 10, nickel :5, penny : 1};
var result = {}
var start = cash - total;

var value = Math.floor(start/Object.values(bills)[0]);
var r = start % Object.values(bills)[0];

if (value > 0){
    result[Object.keys(bills)[0]] = value;
}

for ( var i = 1;  i < Object.keys(bills).length; i++){
    value = Math.floor(r/Object.values(bills)[i]);
    r = r % Object.values(bills)[i];
    if (value > 0){
        result[Object.keys(bills)[i]] = value;
    }
}

return result;
}




console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));