num = Number(process.argv[2])

switch (true) {
    case num >= 2 && num <= 4:
        console.log("春")
        break;

    case num >= 5 && num <= 7:
        console.log("夏")
        break;

    case num >= 8 && num <= 10:
        console.log("秋")
        break;

    default:
        console.log("冬")
        break;
}