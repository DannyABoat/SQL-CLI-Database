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

exports.updateFilm = async (film) => {
    try {
      await Film.update({
        name: argv.title,
        actor: argv.actor,
        genre: argv.genre,
        producer: argv.producer
      },
      {where: {
          id: film.id
        }
});
        console.log(`Movie id: ${film.id} was updated`)
    } catch (error) {
      console.log(error)
    }
};


exports.deleteFilm = async (film) => {
    try {
      await Film.destroy({
        where: {
          id: film.id
        }
      })
    } catch (error) {
      console.log(error)
    }
  }