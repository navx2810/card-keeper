const log = console.log
import Model from "./model.json"
const remote = require("electron").remote
const app = remote.app
const fs = require("fs")
const path = require("path")

export const USER_DATA = app.getPath("userData")

export const BuildConfig = {
    save: {
        location: USER_DATA,
        name: "CardsCollection.db"
    }
}

export function Init() {
    let location = path.join(USER_DATA, "CardsCollection.db")
    if( !fs.existsSync(location) ) {
        let sql_path = ( fs.existsSync("./original.db.sql") ) ? "./original.db.sql" : "static/original.db.sql"
        log(`Database does not exist, creating it at ${location}.`)
        const db_sql = fs.readFileSync(sql_path, "utf-8")
        let db = remote.require("better-sqlite3")( location, {} )
        db.exec(db_sql)
        log(`Database is created.`)
        db.close()
    }
}