const express = require('express');
const router = express.Router();
const axios=require('axios')
const asyncHandler =require('express-async-handler');

const input =asyncHandler(async(req,res)=>{
  var result;
    const input = req.query['input']
    axios(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&components=country:${"IN"}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then( function (response){

           result = response;
          return res.json(result.data);})
    .catch (function (error) {
      console.log(error)
  
    })
    //console.log()
   //res.json( result)
      }
)

const route = asyncHandler(async(req,res)=>{
console.log(req)
  var result;
  const origin = req.query['origins']
  const end = req.query['destinations']
  //const signal=req.query['signal']
  const config= {
      method: "get",
      url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${end}&units=imperial&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      ,
      //signal
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

router.get('/api/maps/input', input);
router.get('/api/maps/route',route)

// router.get('/api/users', user.getUsers);

// router.post('/api/users', user.newUser);

// router.delete('/users/:id', user.deleteUser);

// router.put('/api/users', user.updateUser);

