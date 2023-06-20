

const Player = require('../models/player.model'); 
// const { response } = require('../models/player.model')


module.exports = {

    index : (req, res) => {
        res.json({
            message: "Hello World"
        });
    },

    getAllPlayers : (req, res) => {
        Player.find()
            .then(player => res.json(player))
            .catch(err => res.json(err));
    },

    getOnePlayer : (req, res) => {
        Player.findOne({_id: req.params.id })
            .then(player => res.json(player))
            .catch(err => res.json(err));
    },

    createPlayer : (req, res) => {
        // console.log('-------------', req.body)
        Player.create(req.body)
            .then(player => res.json(player))
            .catch(err => res.status(400).json(err));
    },

    updatePlayer : (req,res) => {
        Player.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
            .then(onePlayer => {
                res.json({ player: onePlayer })
            } )
            .catch((err) => { res.status(400).json(err) } );
    },

    deletePlayer : (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({result: result})
            })
            .catch((err) => {res.json(err)} );
    }

}