function sumPowerOfE(base, exp) {
  let i;
  let result = 0;
  for (i = 0; i <= base; i++) {
    result += Math.pow(i, exp);
  }
  return result;
}

const paramN = process.argv[2];
const paramE = process.argv[3];
const n = parseInt(paramN, 10);
const e = parseInt(paramE, 10);
const sum = sumPowerOfE(n, e);
console.log(sum);
