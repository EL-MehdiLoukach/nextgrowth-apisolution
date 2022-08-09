const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');


// General Configuration
const app = express();
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    origin: ["http://localhost:3000" /*"https://NAMEPROJECT.netlify.app"*/],
}));
app.use(require("helmet")());
const PORT = process.env.PORT || 3000
// Database instance
const connectDB = require('./config/database');

// Load Config
dotenv.config({path: './config/config.env'})

connectDB();

// Routes
const ProductRoute = require('./routes/product')
app.use('/product', ProductRoute)

// Authorization function
const apiKeyVerification = (req,res,next) => {
    if(req.headers.authorization === process.env.API_KEY){
        next()
    } else {
        return res.status(403).json({message : "access forbidden"})
    }
}
// wrap api in V1 
const apiV1 = express()
apiV1.use('/api/v1', apiKeyVerification, app)


apiV1.listen(PORT, ()=> {
    console.log("NextGrowth API started successfully !")
});
