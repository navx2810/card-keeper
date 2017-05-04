const remote = require("electron").remote

let sqlite = remote.require("better-sqlite3")
let filepath = require("path").join(require("@/util").USER_DATA, "CardsCollection.db")

export default new class {
	_db = null
	_cards_stmt = null
	_collections_stmt = null

	get db() {
		// if(!this._db) this._db = new sqlite(filepath, {})
		// return this._db
		return null
	}

	get cards_stmt() {
		if(!this._cards_stmt) this._cards_stmt = this.db.prepare("select * from CARDS_VIEW where name like ? order by name asc limit ? ")
		return this._cards_stmt
	}

	get collections_stmt() {
		if(this._collections_stmt === null) this._collections_stmt = this.db.prepare("select * from COLLECTIONS_VIEW where name like ? order by name asc limit ?")
		return this._collections_stmt
	}

	Find(location, name = "", limit = 20) {
		return (location === "COLLECTIONS_VIEW") ? this.collections_stmt.all(`%${name}%`, limit) : this.cards_stmt.all(`%${name}%`, limit)
	}

	FindCard(name = "", limit = 20) { return this.Find( "CARDS_VIEW", name, limit ) }
	FindCollection(name = "", limit = 20) { return this.Find("COLLECTIONS_VIEW", name, limit) }

	Close() { this.db.close() }
}