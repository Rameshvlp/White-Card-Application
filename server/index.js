const express = require('express');
const app = express()
const cors = require('cors')

require('./connection/conn');
require('./schema/userSchema');

app.use(express.json());
app.use(cors({
    origin:"*"
}))

const port=process.env.port||8070;
app.listen(port,()=>{
    console.log("Successfully Connected to Port");
})

const userrouter = require('./router/userrouters')
app.use(userrouter);