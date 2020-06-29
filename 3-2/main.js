const mark = "*"
const underLine = "-"
const widthArrAdd = []
const widthArrEven = []

for (let i = 0; i < process.argv[3]; i++) {

    if (i % 2 == 0) {
        widthArrAdd.push(underLine)
        widthArrEven.push(mark)
    } else {
        widthArrAdd.push(mark)
        widthArrEven.push(underLine)
    }
}

const deleteCommaAdd = widthArrAdd.join("")
const deleteCommaEven = widthArrEven.join("")

for (let i = 0; i < process.argv[2]; i++) {

    if (i % 2 == 0) {
        console.log(deleteCommaEven)
    } else {
        console.log(deleteCommaAdd)
    }
}