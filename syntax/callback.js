
var b = function(){
  console.log('B');
}
b();

function slowfunc(callback){
  callback();
}

slowfunc(b);
