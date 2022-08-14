const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.json())

const db = mongoose.connection
const url = process.env.URL

 
mongoose.connect(url,{
    useNewurlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Connected successfully!"))
.catch(err => console.log(err))

app.post('/insert', (req,res) => {
    const { name, result } = req.body
    
    db.collection("users").insertOne({name:name,result:result})

    res.json("success")
})

app.listen(process.env.PORT || 3000)