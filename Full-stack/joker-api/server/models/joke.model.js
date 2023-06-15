

const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    
    setup: {
        type: String,
        required: ["Setup is required!"],
        minlength: [10, "Must be atleast 10 characters long"]
    },
    punchline: {
        type: String,
        required: ["Setup is required!"],
        minlength: [3, "Must be atleast 3 characters long"]
    }
}, {timestamps: true} );

const Joke = mongoose.model('Joke', JokeSchema); 

module.exports = Joke;
