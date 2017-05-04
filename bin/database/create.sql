/* I am the sql query to run in order to initialize a fresh database. */
drop view if exists CARDS_VIEW;
drop view if exists COLLECTION_VIEW;
drop table if exists sets;
drop table if exists cards;
drop table if exists collection;

create table if not exists sets(
	code TEXT UNIQUE,
	name TEXT NOT NULL,
	releaseDate DATE NOT NULL,
	PRIMARY KEY(code)
);

create table if not exists cards(
	id	TEXT UNIQUE,
	name TEXT NOT NULL,
	mid	INTEGER NOT NULL,
	rarity TEXT NOT NULL,
	code TEXT NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(code) REFERENCES sets(code)
);

create table if not exists collection(
	id TEXT UNIQUE,
	foils INTEGER NOT NULL,
	normals INTEGER NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(id) REFERENCES cards(id)
);

create view if not exists CARDS_VIEW as
select cards.id, cards.name, cards.mid, cards.rarity, cards.code, sets.name as setName, sets.releaseDate, collection.foils, collection.normals
from cards
inner join sets on cards.code = sets.code
left join collection on cards.id = collection.id;

create view if not exists COLLECTIONS_VIEW as
select cards.id, cards.name, cards.mid, cards.rarity, cards.code, sets.name as setName, sets.releaseDate, collection.foils, collection.normals
from collection
inner join sets on cards.code = sets.code
left join cards on cards.id = collection.id;