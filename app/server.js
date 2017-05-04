const restify = require("restify")
const sqlite = require("better-sqlite3")

const { join } = require("path")
const filepath = join(require('electron').app.getPath("userData"), "CardsCollection.db")
const db = new sqlite(filepath, {})

const path = (route="") => `/api${route}`
const Error = (message) => ({ message })
const log = console.log

const Statements = {
    GetCards: db.prepare("select * from CARDS_VIEW where name like ? order by name asc limit ? "),
    GetCollection: db.prepare("select * from COLLECTIONS_VIEW where name like ? order by name asc limit ?"),
    AddCard: db.prepare("insert into collection (id, foils, normals) values (?, 0, 0)"),
    UpdateCard: db.prepare("update collection set foils = ?, normals = ? where id = ?")
}

function Start(port) {
    let server = restify.createServer({
        name: "MTG Keeper API",
        version: "0.0.1"
    })

    server.use(restify.bodyParser())
    server.use(restify.queryParser())

    server.get(path(), Information)
    server.get(path("/cards/all"), AllCards)
    server.get(path("/cards/mine"), MyCards)
    server.post(path("/cards/mine"), AddCard)
    server.put(path("/cards/mine"), UpdateCard)

    server.listen(port, () => {
        log("[Server] Server is listening on port " + port + ".")
    })
}

const Information = (req, res, next) => {
    res.json(200, { msg: "Yep, it's working out well." })
}

const AllCards = (req, res, next) => Cards(req, res, next, Statements.GetCards)
const MyCards = (req, res, next) => Cards(req, res, next, Statements.GetCollection)

const AddCard = (req, res, next) => {
    const { id } = req.query
    if(!id) { res.send(new restify.BadRequestError("No ID is present.")) }
    Statements.AddCard.run(id)
    res.send(200, {msg: "Card was successfully added."})
}

const UpdateCard = (req, res, next) => {
    const { id, foils, normals } = req.query
    if(!id || !foils || !normals) { res.send(new restify.BadRequestError("Please send the ID, foil count, and normal count.")) }
    Statements.UpdateCard.run(foils, normals,id)
    res.send(200, {msg: "Card was successfully update."})
}


const Cards = (req, res, next, statement) => {
    const { limit=20, name="" } = req.query
    res.json(statement.all(`%${name}%`, limit))
}

module.exports = { Start }