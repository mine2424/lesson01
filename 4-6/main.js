const nowTime = process.argv.slice(2).join(" ")

const numOnly = nowTime.split(":")

const result = Number(numOnly[1]) + 45;

if (60 <= result) {
    const mimutes = result - 60;
    const hours = Number(numOnly[0]) + 1;
    if (24 <= hours) {
        const newHours = hours - 24;
        console.log(newHours)
        console.log(mimutes)
    } else {
        console.log(hours);
        console.log(mimutes);
    }
} else {
    console.log(Number(numOnly[0]));
    console.log(result)
}
