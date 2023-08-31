const express = require('express');
const mongoose = require('mongoose');
const app = express();
const urlModel = require('./model/shortURL');
const { shortURL,redirectURL  } = require('./controller/urlFunction');
const PORT = process.env.PORT || 3000;

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',async (req,res)=>{
    const findURL = await urlModel.find();
    return res.render('index',{url:findURL});
})

app.post('/shotit/',shortURL)
app.get('/:id',redirectURL);

mongoose.connect("mongodb://127.0.0.1/urls")
.then(()=>{
    app.listen(PORT,()=>{console.log("CONNECTION SUCCESSFUL")});
})
.catch((err)=>{
    console.error(err);
})