const songs = require('./playdata.json')
const contents = require('./songs.json')
const date = songs.data
const details = contents.songs

date.sort(function (a, b) {
    return b.count - a.count
})

for (let x = 0; x < date.length; x++) {

    const dateId = Number(date[x].id)

    for (let y = 0; y < details.length; y++) {
        const detailsId = Number(details[y].id)

        if (dateId == detailsId) {
        console.log(`${x+1}位:${details[x].title}:${date[x].count}`)
        }
    }
}

