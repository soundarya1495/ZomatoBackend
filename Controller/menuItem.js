const  menuSchema= require("../Model/menu");

exports.MenuApi=async(req,res)=>{
    try{
        let result = await menuSchema.find({name:req.params.name})
        res.status(200).json({
            message:"Menu fetched successfully",
            Menu: result
        });  
    }catch{
     res.status(500).send(`internal server error`);
    }
   

}