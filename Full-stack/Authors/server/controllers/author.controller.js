


const Author = require('../models/author.model'); 
// const { response } = require('../models/author.model')




module.exports = {

    index : (req, res) => {
        res.json({
            message: "Hello World"
        });
    },

    getAllAuthors : (req, res) => {
        Author.find()
            .then(author => res.json(author))
            .catch(err => res.json(err));
    },

    getOneAuthor : (req, res) => {
        Author.findOne({_id: req.params.id })
            .then(author => res.json(author))
            .catch(err => res.json(err));
    },

    createAuthor : (req, res) => {
        // console.log('-------------', req.body)
        Author.create(req.body)
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err));
    },

    updateAuthor : (req,res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
            .then(oneAuthor => {
                res.json({ author: oneAuthor })
            } )
            .catch((err) => { res.status(400).json(err) } );
    },

    deleteAuthor : (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({result: result})
            })
            .catch((err) => {res.json(err)} );
    }

}

