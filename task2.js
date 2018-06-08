// создам переменные
function Caesar(input) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    OUTPUT = "";
    STRING;
    shiftAmount;
    shiftedAlphabet;
    if(typeof input === "object"){
        shiftAmount = input.shift;
      STRING = input.msg;
    } else {
          return;
      }
// сдвиг алфавита
     if(typeof STRING === "string" || typeof (STRING+"") === "string"){
       shiftedAlphabet = alphabet.slice(shiftAmount);
     shiftedAlphabet += alphabet.slice(0, shiftAmount);
     for(var i = 0; i < STRING.length; i++){
          var k = alphabet.indexOf( STRING[i] )
        OUTPUT += shiftedAlphabet[k];
    }
} else {
  return;
}
return OUTPUT;
}