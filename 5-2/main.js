const salary = require('./users.json');
//文字省略のために新定義
const users = salary.users
//計算する関数
function calcSalary(number,wage) {
    return user.salary = number * user.years + wage;
}
//"A","B","C"で振り分けして、"A"のみ年数でも振り分ける
for (user of users) {
    if ("A" === user.rank) {
        if (5 <= user.years) {
            calcSalary(3000,120000)
        } else {
            calcSalary(3000,100000)
        }
    } else if ("B" === user.rank) {
        calcSalary(4000,140000)
    } else {
        calcSalary(5000,160000)
    }
}
users.sort(function (a, b) {
    return b.salary - a.salary;
});
for (user of users) {
    console.log(`${user.name}:${user.salary}`)
}

