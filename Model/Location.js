const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const locationSchema = new Schema({
    name: String,
    city_id: Number,
    location_id:Number,
    city:String,
    country_name:String
});

module.exports = mongoose.model("Location", locationSchema);