const mealtypeSchema = require('../Model/mealtype');

exports.fetchMealtype=async(req,res)=>{
    try{
        let result = await mealtypeSchema.find({})
        res.status(200).json({
            message:"Mealtypes fetched successfully",
            Mealtypes: result
        });  
    }catch{
     res.status(500).send(`internal server error`);
    }
 }


 