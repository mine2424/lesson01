const students = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60];
const num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const hyphen = [];
const worth = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


for (let i = 0; i < students.length; i++) {


    if (students[i] < 10) {
        num[1]++
    } else if (students[i] >= 10 && 20 > students[i]) {
        num[2]++
    } else if (students[i] >= 20 && 30 > students[i]) {
        num[3]++
    } else if (students[i] >= 30 && 40 > students[i]) {
        num[4]++
    } else if (students[i] >= 40 && 50 > students[i]) {
        num[5]++
    } else if (students[i] >= 50 && 60 > students[i]) {
        num[6]++
    } else if (students[i] >= 60 && 70 > students[i]) {
        num[7]++
    } else if (students[i] >= 70 && 80 > students[i]) {
        num[8]++
    } else if (students[i] >= 80 && 90 > students[i]) {
        num[9]++
    } else if (students[i] >= 90 && 100 > students[i]) {
        num[10]++
    } else if (100 >= students[i]) {
        num[11]++
    }


}

const quantity = [];

for (a = 0; a < num.length; a++) {
    quantity.push(num[a])
    hyphen.push("---")
}

const resultArr01 = []
const resultArr02 = []
const resultArr03 = []
for (b = 1; b < students[b]; b++) {

    if (quantity[b] >= 3) {
        resultArr01.push("*")
    } else {
        resultArr01.push(" ")
    }

    if (quantity[b] >= 2) {
        resultArr02.push("*")
    } else {
        resultArr02.push(" ")
    }

    if (quantity[b] >= 1) {
        resultArr03.push("*")
    } else {
        resultArr03.push(" ")
    }
}
const newResultArr01 = resultArr01.join('  ')
console.log(newResultArr01)

const newResultArr02 = resultArr02.join('  ')
console.log(newResultArr02)

const newResultArr03 = resultArr03.join('  ')
console.log(newResultArr03)


const newHyphen = hyphen.join('')
console.log(newHyphen)

const newWorth = worth.join(' ')
console.log(newWorth)