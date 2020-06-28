const mark = "*"
const space = " "
const num = Number(process.argv[2])


for (i = 0; i < num; i++) {

    const arr = []

    for (n = 0; n < num - i + 1; n++) {
        arr.push(space)
    }

    for (c = 0; c < (i + 1) * 2 - 1; c++) {
        arr.push(mark)
    }

    const deleteArr = arr.join("")
    console.log(deleteArr)

}