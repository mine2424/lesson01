const result = []
const number = process.argv.slice(2)

//0から9999までnumberと総当たりする
for (a = 0; a < 9999; a++) {
    for (b = 0; b < number.length; b++) {
        //一致したら新配列にpushする
        if (a == number[b]) {
            result.push(number[b])
        }
    }
}
console.log(result)