const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    //prevent duplication of notes. 
    //Filter the notes array, return true when title matches another title already in the array
    //The output will be a new array of duplicated titles
        //const duplicateNotes = notes.filter((note) => note.title === title)

    //if a duplicate title is found...
    const duplicateNote = notes.find((note) => note.title === title)
    
    // debugger //to test out in chrome debugging tool

    const added = chalk.bgGreen
    const error = chalk.bgRed

    //if duplicated title is not true (undefined), push note
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        
        saveNotes(notes)
        console.log(added('New note added'))
    } else {
        console.log(error('Note title taken! Use a different title.'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNotes = (title) => {
    //load notes, read the JSON file
    const notes = loadNotes();
    //filter notes array
    //if title note in array does not match the title to be deleted, keep this title in the new array 
    const keptNotes = notes.filter((note) => note.title !== title)

    const deleted = chalk.bgGreen
    const error = chalk.bgRed

    //check if length of notes is the same as kept notes, then nothing has been removed
    if (notes.length > keptNotes.length) {
        let msg = "Note Removed"
        console.log(error(msg))
        saveNotes(keptNotes)
 
    } else {
        let msg = "No note found!"
        console.log(deleted(msg))
    }
}

//List notes

const listNotes = (title) => {
    const notes = loadNotes()
    console.log(chalk.blue.bold('Your notes')) 
    return notes.forEach((note) => console.log(chalk.blue(note.title)))
}

//Read notes

const readNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.find((note) => note.title === title)

    if(findNote) {
        console.log(chalk.inverse(findNote.title))
        console.log(findNote.body)
    } else {
        console.log(chalk.red('Note not found'))
    }
}


//ERROR HANDLING
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    addNote,
    removeNotes,
    listNotes,
    readNote,
};