let mongoose=require('mongoose');
let expresss=require('express');
let router=express.Router();

//importing vehicle model

let vehicleScchema=require('../Models/Vehicle');

//creating the vehicle 

router.route('/create-vehicle').post((req,res,next)=>{
    vehicleScchema.create(req,body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});


//reading vehicles

router.route('/').get((req,res)=>{
    vehicleSchema.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})


//get a prarticular detail

router.route('/edit-vehicle/:id').get((req,res)=>{
    vehicleSchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

