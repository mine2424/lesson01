const str = "こはるはるここはるここはるはるここはるこはるはるはる"
const search = "こはる"
const search02 = "はるこ"
let koharuCounts = 0
let harukoCounts = 0

function isSearch(words, roop, num) {
    for (let i = 0; i < num.length; i++) {
        if (words[roop+i] !== num[i]) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < str.length; i++) {
    if (isSearch(str,i,search)) {
        koharuCounts++
    }
    if (isSearch(str,i,search02)) {
        harukoCounts++
    }
}

console.log(`こはる : ${koharuCounts}`)
console.log(`はるこ : ${harukoCounts}`)