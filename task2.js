function сaesarShift(n, k){
	let source = "";
for (let i = 0; i < source.length; i++) {
const code = source.charCodeAt(i);
const newCode = сaesarShift(code, shift);
const newChar = String.fromCharCode(newCode);
}
	return newChar;
}

const n = process.argv[2];
const paramK = process.argv[3];
const k = parseInt(paramK, 10);
const sipher = сaesarShift(n, k);
console.log(sipher);