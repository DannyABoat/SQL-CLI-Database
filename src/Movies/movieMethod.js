const Film = require("./movieModel")
const yargs = require  ("yargs");
const {hideBin} = require ("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;


exports.addFilm = async(filmObj) =>{
    try {
        await Film.sync()
        await Film.create(filmObj)
    } catch (error) {
        console.log(error)
    }
};

exports.list = async() =>{
    try{
        const listOfMovies = await Film.findAll()
        console.log(listOfMovies)
    } catch (error) {
        console.log(error) 
    }  
};

exports.updateOne = async (argv)=> {

    newTitle = await Film.update({ title: argv.newTitle }, {
        where: {
            title: argv.title
        }
    });
    console.log(`Movie title updated from ${argv.title} to ${argv.newTitle}`)
};

exports.deleteOne = async ()=>{
    const deletedFilm = await Film.destroy({
        where: {
          title: argv.title
        }
      });
    console.log(`Movie titled ${argv.title} is deleted`)
};