var myArgs = process.argv.slice(2);

 var result = 0;

 for (var i = 0; i < myArgs.length; i++){
    result += Number(myArgs[i]);
 }

 console.log(result);