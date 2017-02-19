import { writeFile, writeFileSync,readFileSync, existsSync} from "fs"
import { join } from "path"

import Data from "yml-loader!lib/data.yml"
const electron = require('electron').remote
const app = electron.app
const ipc = electron.ipcMain

// const lvldb = require('level')

let db

let config

let autoSaveTimer

export function Initialize() {
    config = ReadOrBuildConfigFile()
    AssembleDatabase()
    Data.file = config.file
    SetAutoSave(Data.autosave.time)
}

export function SetAutoSave(count) {
    clearTimeout(autoSaveTimer)
    console.log(`I am from this ${count}`)
    if(count > 0) { autoSaveTimer = setTimeout(() => { Save("Autosaved..", `${config.file.joined}.autosave.json`); SetAutoSave(count) }, count * 60000) }
}


function ReadOrBuildConfigFile() {
    let name = "config.json"
    let path = join(app.getPath("userData"), name)
    log(`Looking for config file at ${path}`)
    if(existsSync(path)) { return JSON.parse( readFileSync(path, "utf-8") ) }
    log('Config file does not exist, creating it with defaults.')

    let x = {
        file: {
            path: app.getPath("userData"),
            name: "cards",
            joined: join(app.getPath("userData"), "cards")
        }
    }

    writeFileSync(path, JSON.stringify(x), "utf-8")
    return x
}

function AssembleDatabase() {
    let { name, path } = Data.file
    let joined = join(config.file.path, `${config.file.name}.json`)
    if(existsSync( joined )) { 
        let obj = JSON.parse(readFileSync(joined, "utf-8"))

        Data.list = obj.list
        Data.file = obj.file
        Data.autosave = obj.autosave
        Data.font = obj.font
    }
    else { writeFileSync(joined, JSON.stringify(Data), "utf-8") }
}

export function Save(msg, destination = `${config.file.joined}.json`) {
    writeFile(destination, JSON.stringify(Data), "utf-8", (err) => {
        if(err) Data.messages.push(err)
        else Data.messages.push(msg)
        console.log("I saved the file")
    })
}


function log(s) { console.log(s) }