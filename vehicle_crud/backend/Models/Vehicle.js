const mogoose=require('mongoose')
const Schema=mongoose.Schema

let vehicleSchema=new Schema({
    name:{
        type:String
    },
    color:{
        type:String
    },
    number:{
        type:number
    }
}, {
    collection:'vehicles'
})

module.export=mongoose.model('Vehicle',vehicleSchema)
