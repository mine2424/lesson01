const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = []

for (i = 0; i < 10; i++) {
    while (true) {
        var randomNum = Math.floor(Math.random() * numArr.length);
        if (!newArr.includes(randomNum)) {
            newArr.push(randomNum)
            break;
        }
    }
}

console.log(newArr.join(' '))