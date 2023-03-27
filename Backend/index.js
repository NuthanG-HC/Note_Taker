const express = require("express");
const connection= require("./connection");
connection();
const app = express();
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(express.json())
const cors = require('cors')
app.use(cors())

const login = require('./Router/login')
const Router1 = require('./Router/register')
app.use(Router1)
app.use(login)

app.listen(4000,()=>{
    console.log("connected to server")
})