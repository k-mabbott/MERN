


const ProductController = require('../controllers/product.controller');



module.exports = function(app){
    
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/product', ProductController.createProduct);
    app.patch('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);

}


















