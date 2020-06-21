const array = []
const result = []

for (let i = 2; i < process.argv.length; i++) {
    array.push(Number(process.argv[i]))
}

//onsole.log(array)

for (a = 0; a < 9999; a++) {
    for (b = 0; b < array.length; b++) {
        if (a == array[b]) {
            result.push(array[b])
        }
    }
}
console.log(result)