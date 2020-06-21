const arg01 = process.argv[2];
const arg02 = process.argv[3];
const arr01 = []
const arr02 = []

for (i = 0; i < arg01.length; i++) {
    arr01.unshift(arg01[i])
}

for (i = 0; i < arg02.length; i++) {
    arr02.unshift(arg02[i])
}

const test01 = Number(arr01.join(''))
const test02 = Number(arr02.join(''))

console.log(test01 + test02);