let express=require('express');
let mongoose=require('mongoose');
let cors=require('cors');
let bodyParser=require('body-parser');
let dbConfig=require('./database/db');

//Express route

const vehicleRoute=require('../backend/routes/vehicle.route');

//mongodb connection

mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true
}).then(()=>{
    console.log('ok Database Successfully conected')
},
error=>{
    console.log('could not connect to the database' + error)
})

//create express
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended:true
}));
app.use(cors());
app.use('/vehicles',vehicleRoute)

//port

const port=process.env.PORT||4000;
const server=app.listen(port,()=>{
    console.log('connected to the port'+ port)
})

//not found error

app.use((req,res,next)=>{
    next(createError(404));
})

app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode)err.statusCode=500;
    res.status(err.statusCode).send(err.message);
})