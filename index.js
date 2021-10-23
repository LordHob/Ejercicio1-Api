const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');
const router = require('./routes')

const app = express();
let PORT = process.env.YOUR_PORT || process.env.PORT || 3000;

//Middleware
app.use(morgan('combined', {stream:logger.stream}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenidos a Express');
});

app.use(router);

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`.bgGreen.black)
});