var paramN = process.argv[2];
var paramE = process.argv[3];
var n = parseInt(paramN, 10);
var e = parseInt(paramE, 10);
var sum = sumPowerOfE(n);
 
function sumPowerOfE(n) {
  var i, result = 0;
  for (i = 0; i <= n; i++) {
    result += Math.pow(i, e);
  }
  return result
}
console.log(sum);