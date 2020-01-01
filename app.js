//const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')



//add custom commands
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Data to add',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

//command to remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
        description:'Title to remove',
        demandOption:true,
        type:'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

//list all notes
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: () => {
        console.log('Listing all the notes!')
    }
})

//read all notes
yargs.command({
    command: 'read',
    describe: 'Reading notes',
    handler: () => {
        console.log('Reading all notes!')
    }

})

yargs.parse()
//console.log(yargs.argv)