const dotenv = require(`dotenv`);

// console.log("process.env", process.env)
const mongoose = require(`mongoose`);
const express = require('express');
const app= express();

dotenv.config({path: './config.env'});
require(`./DB/conn`);

// const User = require(`./model/userSchema`);
app.use(express.json());

//link the router files.
app.use(require(`./router/auth`));

const port = process.env.port;

//middleware

const middleware = (req,res, next) => {
     console.log('hello middleware');
     next();
}  


// app.get('/', (req , res)=> {
//     res.send(`Hello world`);
// });

app.get('/about',middleware , (req , res)=> {
    res.send(`Hello About`);
});

app.get('/contact', (req , res)=> {
    res.send(`Hello contact`);
});

app.get('/signin',(req,res )=> {
    res.send(`on login page`);
})

app.get('/signup', (req , res)=> {
    res.send(` craete registration page`);
});

//console.log(`Data1`);

app.listen(port, ()=> {
    console.log(`server is running ${port}`);
})