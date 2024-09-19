const restaurantSchema = require('../Model/restaurants');

exports.fetchRestaurant=async(req,res)=>{
    try{
        let result = await restaurantSchema.find({})
        res.status(200).json({
            message:"Mealtypes fetched successfully",
            Restaurants: result
        });  
    }catch{
     res.status(500).send(`internal server error`);
    }
 }

 exports.findByCityApi = (req,res)=>{
    const cityName = req.params.city;
    restaurantSchema.find({city:cityName})
    .then((result) => {
        res.status(200).json({
            message:`Restaurant fetched for city ${cityName}`,
            Restaurant : result
        })
    }).catch((error)=>{
        res.status(500).json({
            message:"Error in database",
            error:error
        })
    })
 }

 exports.findByIdApi=async(req,res)=>{
    const id = req.params._id;
    restaurantSchema.find({_id:id})
    .then((result) => {
        res.status(200).json({
            message:`Restaurant fetched`,
            Restaurant : result
        })
    }).catch((error)=>{
        res.status(500).json({
            message:"Error in database",
            error:error
        })
    })
}

 exports.getAllRestaurantsByQuery = async (req,res) =>{
    try{
        const {mealtype_id, city, cuisine, min_price, sort, location_id} = req.query;
        const query = {};
        if(city) query.city = city;
        if(mealtype_id) query.mealtype_id = Number(mealtype_id);
        if(location_id) query.location_id = Number(location_id);
        if (cuisine) {
            query.cuisine =  { $elemMatch: { name: cuisine } };
        }
        
        if(min_price){
            query.min_price= {$gte : Number(min_price)};
        }

        const sortOptions = {};
        if(sort){
            sortOptions[sort] = 1;
        }

        const restaurants = await restaurantSchema.find(query).sort(sortOptions).exec();

        res.json(restaurants);
    } catch (error){
        console.log(error);
        res.status(500).json({error:error});
    }
}






 