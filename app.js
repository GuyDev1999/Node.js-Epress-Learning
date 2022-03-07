const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) => {

    res.send('Hello Jetguy DIA2');

})

app.listen(port, ()=>{
    debug("Listerning on port" + chalk.green(" : " + port));
})