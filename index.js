const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const session = require('express-session');
require('dotenv').config();

const PORT = process.env.APP_PORT;
const application = require('./routes/api/Application');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cookieParser());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.static(path.join(__dirname, '/public')))
app.use(
    cors({
        origin: ['http://localhost:3000', 'http://localhost:5173'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    })
);

app.get("/", (req, res) => {
    return res.json({ message: "Welcome to test application." });
});

app.use(session({ secret: process.env.SECRET_KEY, resave: true, saveUninitialized: true }));

app.use('/api/applications', application);


app.use((req, res) => {
    return res.status(404).json({ message: 'Requested page not found' });
});

app.listen(PORT, () => {
    console.log('Application listening on port 5000!');
});