
const express = require("express");
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT;
    
require("./config/mongoose.config");
    
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyProductRoutes = require("./routes/product.routes");
AllMyProductRoutes(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );



