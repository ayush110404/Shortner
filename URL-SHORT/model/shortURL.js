const mongoose = require('mongoose');
const shortid = require('shortid');

const  urlSchema = new mongoose.Schema({
    URL:{
        required:true,
        type:String
    },
    shortURL:{
        type:String,
        required:true,
        default:shortid()
    }
})

module.exports = mongoose.model('shortURL',urlSchema);