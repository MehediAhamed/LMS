const mongoose = require("mongoose");

const UserLMSSchema = new mongoose.Schema({


    name: {
        type: String,

    },

    email: {
        type: String,
     
    },

    password: {
        type: String,
        required: true,
    },

    user_id: {
        type: String,
        required: true,
    },
    addmission_year: {
        type: String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }



}, { timestamps: true });

module.exports = mongoose.model("UserLMS", UserLMSSchema);