const argv01 = process.argv[2].split(",")
const flatArr = []
for (let i = 0; i < argv01.length; i++) {
    const newArgv01 = argv01[i].toLowerCase()
    flatArr.push(newArgv01)
}

const argv02 = process.argv[3]

const newArr = []

for (let i = 0; i < argv01.length; i++) {
    if (flatArr[i].indexOf(argv02) !== -1) {
        newArr.push(flatArr[i])
    }
}
console.log(newArr.sort().join(" "))

