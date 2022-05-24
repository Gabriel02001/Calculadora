const express = require('express')
const route = require('./routes')
const path = require('path')

const dotenv = require('dotenv');

//dotenv.config({path: '.env'});

const PORT = process.env.PORT || '3001';

const server = express()   
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))                                  
server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))  
server.use(route)                                                                  

server.listen(PORT, () => console.log("rodando na porta " + PORT))  // 