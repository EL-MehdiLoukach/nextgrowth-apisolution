const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const jsonwebtoken = require('jsonwebtoken')

// General Configuration
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    origin: ["http://localhost:3000" /*"https://NAMEPROJECT.netlify.app"*/],
}));
app.use(require("helmet")());
const PORT = process.env.PORT || 3000
// JWT CONFIG
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});
// Database instance
const connectDB = require('./config/database');
// Load Config
dotenv.config({path: './config/config.env'})
connectDB();
// Routes
const {routes} = require('./routes/product')
routes(app)
// wrap api
const apiV1 = express()
apiV1.use('/api/v1', app)


apiV1.listen(PORT, ()=> {
    console.log("NextGrowth API started successfully !")
});
