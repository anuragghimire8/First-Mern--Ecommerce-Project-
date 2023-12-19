const express=require('express')
const colors=require('colors')
const dotenv=require('dotenv')
const morgan=require('morgan')
const   Connectdb = require('./config/db')
const authRoutes =require('./routes/authRoute')
const cors=require('cors')
const categoryRoute=require('./routes/categoryRoute')
const productRoute=require('./routes/productRoute')

//configure env

dotenv.config()

//routes



//res object

 const app=express()

 
//database config connecton
Connectdb();


//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
 
//routes
app.use('/api/v1/auth',authRoutes)
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);


//rest api
 app.get('/',(req,res)=>{
    res.send(
    " <h1>Welcome to HomeStore App</h1>"
    )
 })
 

 //PORT
  const PORT=process.env.PORT || 8080;

  //run listen 

  app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
  }) 