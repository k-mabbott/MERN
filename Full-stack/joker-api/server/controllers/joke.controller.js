

const Joke = require('../models/joke.model');

// can do all seperate module.exports or object style

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => {
            res.json({ jokes: allDaJokes})} )
        .catch((err) => {res.json(err)} );
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id })
        .then((allDaJokes) => 
        {res.json({ jokes: allDaJokes})} )
        .catch((err) => {res.json(err)} );
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newjoke => 
            {res.json({ joke: newjoke })})
        .catch((err) => {res.json(err)} );
}

module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then(oneJoke => {
            res.json({ joke: oneJoke })
        } )
        .catch((err) => { res.json(err) } );
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => {res.json(err)} );
}

module.exports.randomJoke = (req, res) => {
    Joke.aggregate().sample(1)
        .then(oneJoke => {
            res.json({joke: oneJoke})
        })
        .catch(err => {res.json(err)})
}


