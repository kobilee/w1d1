var myArgs = process.argv.slice(2);

function pigLatin(strArry) {
  var newStr = "";
  for (var i = 0; i < strArry.length; i++){
   newStr +=  strArry[i].slice(1) + strArry[i][0] + "ay  ";
  }
return newStr;
}

console.log(pigLatin(myArgs));