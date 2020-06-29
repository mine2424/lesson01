const kobeJson = require('./kobe.json')

function isKey(value) {
    const keys = Object.keys(value)

    for (key of keys) {

        if ("kobe" === key) {

            console.log(value[key])
        }
        if ( typeof value[key] === "object") {
            isKey(value[key])
        }
    }
}

isKey(kobeJson)
