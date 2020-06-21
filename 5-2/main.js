const salary = require('./users.json');
const users = salary.users
for (i = 0; i < users.length; i++) {
    
    if ("A" === users[i].rank) {
        if ( 5 <= users[i].years) {
            users[i].salary = 3000 * users[i].years + 120000
        } else {
            users[i].salary = 3000 * users[i].years + 100000
        }
    } else if ("B" === users[i].rank) {
        users[i].salary = 4000 * users[i].years + 140000
    } else {
        users[i].salary = 5000 * users[i].years + 160000
    }
}

users.sort(function (a, b) {
    return b.salary - a.salary;
});

for (i = 0; i < users.length; i++) {
    console.log(`${users[i].name}:${users[i].salary}`)
}


