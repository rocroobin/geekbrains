const source = process.argv[2];
const paramK = process.argv[3];
const k = parseInt(paramK, 10);

function caesarShift(code, shift) {
    const codeBigA = 65;
    const codeBigZ = 90;
    const codeSmallA = 97;
    const codeSmallZ = 122;
    
    const alphabetLength = codeBigZ - codeBigA + 1;
    const isBig = code <= codeBigZ;
    const startShift = isBig ? codeBigA : codeSmallA;
 
    const newCode = (code + shift - startShift) % alphabetLength + startShift;
  
    return newCode;
}

let result = '';
for (let i = 0; i < source.length; i++) {
    // получу код текущего символа
    const code = source.charCodeAt(i);
    // вычислю новый код символа
    const newCode = caesarShift(code, k);
    // вычислю новый символ
	  const newChar = String.fromCharCode(newCode);
	  result += newChar;
}
console.log(result);