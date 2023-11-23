const mongoose = require("mongoose");

const returnSchema = new mongoose.Schema({

    userId:{
        type: String, 
    },
    userName:{
        type: String, 
    },
    bookId:{
        type: String, 
    },
    title: {
        type: String,

    },

    author: {
        type: String,
      
    },

    genre: {
        type: String,
       
    },
    lateFees:{
        type: String,
    },

    year: {
        type: String,
    },
  
    noOfday:{
        type:Number
    },
    isReturn:{
        type:Boolean,
        default:false
    },
  


}, { timestamps: true });

module.exports = mongoose.model("ReturnBook", returnSchema);