const args01 = process.argv[2].split(",")
const args02 = process.argv[3]
const flatArr = []
const newArr = []
//まず、すべて小文字に直す
for (const arr01 of args01) {
    flatArr.push(arr01.toLowerCase())
    //もし第三引数で受け取った文字が見つかったらまた新しい配列に入れる
    for (flat of flatArr) {
        if (flat.indexOf(args02) !== -1) {
            newArr.push(flat)
        }
    }
}

console.log(newArr.sort().join(" "))