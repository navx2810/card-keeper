const fs = require("fs")
const log = console.log

const AllCards = require("./cards.json")

let _sets = []
let _cards = []

for(k in AllCards) {
    const code = k
    const { name, releaseDate, cards } = AllCards[k]

    _sets.push(`${code}\t${name}\t${releaseDate}`)

    for(let card of cards) {
        const { name, id, multiverseid, rarity } = card

        _cards.push(`${id}\t${name}\t${multiverseid}\t${rarity}\t${code}`)
    }
}

_sets.unshift("code\tname\treleaseDate")
_cards.unshift("id\tname\tmid\trarity\tcode")

fs.writeFile("./bin/database/sets.csv", _sets.join('\n'), "utf-8", () => { log("Sets have finished writing.") })
fs.writeFile("./bin/database/cards.csv", _cards.join('\n'), "utf-8", () => { log("Cards have finished writing.") })