const nowTime = process.argv.slice(2).join(" ")
//時間と分を分けて配列に入れる
const numOnly = nowTime.split(":")
//分の方のみに45分足す
const result = Number(numOnly[1]) + 45;

const modelHours = Number(numOnly[0])
//出力を一個にまとめた関数
function output(hour, mimute) {
    console.log(hour)
    console.log(mimute)
}
//仮に分の方が60分を超えたら
if (60 <= result) {
    //合計から60で引く、その分時間を足す
    const mimutes = result - 60;
    const hours = modelHours + 1;
    if (24 <= hours) {
        //さらに時間が24時以降になれば合計から24で引く
        const newHours = hours - 24;
        output(newHours,mimutes)
    } else {
        output(hours,mimutes)
    }
} else {
    //もし時間が24時以降になれば合計から24で引く
    if (24 <= modelHours) {
        const hours02 = modelHours - 24;
        output(hours02,result)
    } else {
        output(test,result)
    }
}
