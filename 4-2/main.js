for (i = 1; i < 51; i++) {

    let num = String(i)

    if ((i % 3) === 0 || num.indexOf(3) >= 0) {
        console.log("WOW")
    } else {
        console.log(i)
    }
}

//callback関数と再帰を使ったパターンです。

function isThree(num, i, limit, callback) {
    let stNum = String(i)
    if ((i % num) === 0 || stNum.indexOf(num) >= 0) {
        callback("WOW")
    } else {
        callback(i)
    }

    if (limit > i) {
        isThree(num, i + 1, limit, callback)
    }
}

function result(num, limit, callback) {
    isThree(num, 1, limit, callback)
}

result(3, 50, (out) => {
    console.log(out)
})