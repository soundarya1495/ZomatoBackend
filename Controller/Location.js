const locationSchema = require('../Model/Location');

exports.fetchLocations = async(req,res) =>{
    locationSchema.find().then(result =>{
        res.status(200).json({
            message:"Locations fetched successfully",
            Locations: result
        });  
    }).catch(error =>{
        res.status(500).json({
            message:"Error in Database",
            error:error
        });
    });
}
 


