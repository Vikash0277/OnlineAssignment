const mongoose = require("mongoose")


const OfferSchema =new mongoose.Schema({
    name:{
        type:String
    },
    cashBack:{
        type:String
    }
})

module.exports = mongoose.model("Offer", OfferSchema);