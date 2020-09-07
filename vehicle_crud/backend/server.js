let express=require('express');
let mongoose=require('mongoose');
let cors=require('cors');
let bodyParser=require('body-parser');
let dbConfig=require('./database/db');

//Express route

const vehicleRoute=require('../backend/routes/vehicle.route');

//mongodb connecc=tion

mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true
}).then(()=>{
    console.log('Database Successfully coonected')
},
error=>{
    console.log('could not connect to the database' + error)
})

//create express
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

}));