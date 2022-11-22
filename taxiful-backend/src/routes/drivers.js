const express = require('express');
const router = express.Router();
const axios=require('axios')
const asyncHandler =require('express-async-handler');



const drivers = asyncHandler(async(req,res)=>{

    var result;
    const lat = req.query['lat']
    const lng = req.query['lng']
    const config= {
        method: "get",
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=3000&type=restaurants&keyword=hospital&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        headers: {},
      };
    axios(config)
      .then( function (response){   
           result = response;
          return res.json(result.data);})
    .catch (function (error) {
      console.log(error)
  
    })
})
module.exports = router;

router.get('/api/drivers', drivers);