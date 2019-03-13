const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// const command = process.argv[2]
// console.log(process.argv)

//customise yargs version
yargs.version('1.1.0')


//add, remove, read, list

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //this ensure that title is a required argument.
            type: 'string',
        },

        body: {
            describe: 'Description of note',
            demandOption: true,
            type: 'string',
        }


    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }

})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title',
            demandOption: true,
            type:'string',
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your note',
    handler(argv){
        notes.listNotes(argv.title)
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//goes through the process  of parsing the arguments with all configuration detail above
yargs.parse()
//console.log(yargs.argv)


//if else statement to conditionally run some code
    // if (command === 'add') {
    //     console.log('Adding some notes!')
    // } else if (command === 'remove') {
    //     console.log('Removing notes!')
    // }


// const msg = getNotes()
// console.log(msg)


// const error = chalk.bgRed
// const pass = chalk.blue.bold
// const warn = chalk.yellow.inverse

// console.log(pass('Success!'))

// console.log(process.argv[2])