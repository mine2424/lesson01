num = Number(process.argv[2])

if (num >= 2 && num <= 4) {
    console.log("春")
} else if (num >= 5 && num <= 7) {
    console.log("夏")
} else if (num >= 8 && num <= 10) {
    console.log("秋")
} else {
    console.log("冬")
}