 const mongoose=require('mongoose')
const colors=require('colors')


  Connectdb=async()=>{
    try{
           const conn=await mongoose.connect(process.env.MONGO_URL)
           console.log(`Connected To MOngodb Database ${conn.connection.host}` .bgMagenta.white)
    } catch(error){
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
 };


 module.exports=Connectdb;