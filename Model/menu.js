const mongoose = require("mongoose");
 
const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    item:[
        {
            name:{type:String, require:true},
            desc:{type:String, require:true},
            price:{type:Number, require:true},
            quantity:{type:Number, require:true},
        },
        {
            name:{type:String, require:true},
            desc:{type:String, require:true},
            price:{type:Number, require:true},
            quantity:{type:Number, require:true},
        },
        {
            name:{type:String, require:true},
            desc:{type:String, require:true},
            price:{type:Number, require:true},
            quantity:{type:Number, require:true},
        },
        {
            name:{type:String, require:true},
            desc:{type:String, require:true},
            price:{type:Number, require:true},
            quantity:{type:Number, require:true},
        },
    ]
})

module.exports = mongoose.model("Menu",menuSchema)//menus - collection name