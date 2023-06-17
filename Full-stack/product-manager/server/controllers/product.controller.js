
const Product = require('../models/product.model'); 
// const { response } = require('../models/product.model')




module.exports = {

    index : (req, res) => {
        res.json({
            message: "Hello World"
        });
    },

    getAllProducts : (req, res) => {
        Product.find()
            .then(product => res.json(product))
            .catch(err => res.json(err));
    },

    getOneProduct : (req, res) => {
        Product.findOne({_id: req.params.id })
            .then(product => res.json(product))
            .catch(err => res.json(err));
    },

    createProduct : (req, res) => {
        // console.log('-------------', req.body)
        Product.create(req.body)
            .then(product => res.json(product))
            .catch(err => res.status(400).json(err));
    },

    updateProduct : (req,res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
            .then(oneProduct => {
                res.json({ product: oneProduct })
            } )
            .catch((err) => { res.status(400).json(err) } );
    },

    deleteProduct : (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({result: result})
            })
            .catch((err) => {res.json(err)} );
    }

}


