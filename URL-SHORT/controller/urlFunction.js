const { model } = require('mongoose');
const urlModel = require('../model/shortURL');

const shortURL = async (req,res) => {
    const ele = await urlModel.findOne({URL:req.body.fullURL})
    if(ele){
        return res.status(404).send("URL already exists");
    }
    const furl = req.body.fullURL;
    if(!(furl)){
        return res.status(404).send("Please enter URL");
    }
    await urlModel.create({
        URL:furl
    })
    return res.redirect('/');
}

const redirectURL = async(req,res) => {
    const shorted = await urlModel.findOne({shortURL:{$eq:req.params.id}});
    // console.log(shorted.URL);
    return res.redirect(shorted.URL);
}


module.exports = {shortURL,redirectURL};