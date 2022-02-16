const yargs = require  ("yargs");
const {hideBin} = require ("yargs/helpers");
const { addFilm, list, updateOne, deleteOne, updateFilm, deleteFilm } = require("./Movies/movieMethod");
const argv = yargs(hideBin(process.argv)).argv;

const app = async() =>{
    if(argv.add){
        const filmObj = {
            name: argv.title,
            actor: argv.actor,
            genre: argv.genre,
            producer: argv.producer
        }
        await addFilm(filmObj)
    } else if (argv.list){
        await list();
    } else if (argv.update){
        await updateFilm(argv);
    } else if (argv.deleteOne){
        await deleteFilm(argv);
    } else {
        console.log("Wrong query")
    }
};

app()