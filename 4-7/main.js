const argv01 = process.argv[2].split(",")
const argv02 = process.argv[3]
const newArr = []
//まず、すべて小文字に直す
for (let i = 0; i < argv01.length; i++) {
    const newArgv01 = argv01[i].toLowerCase()
    //もし、aが含まれていたらpushする
    if (newArgv01.indexOf(argv02) !== -1) {
        newArr.push(newArgv01)
    }
}

console.log(newArr.sort().join(" "))