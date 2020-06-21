const sum = process.argv[2]
const pay100yen = Math.floor(sum / 100)
const pay10yen = Math.floor(sum % 100 / 10)
const pay1yen = sum % 10


console.log(`100円玉${pay100yen}枚,10円玉${pay10yen},1円玉${pay1yen}枚`)
