const express=require('express');

const {registerController, forgotPasswordController,updateProfileController}=require('../controllers/authController')
const {loginControllers}=require('../controllers/authController')
const {testController,getAllOrdersController,getOrdersController,orderStatusController}=require('../controllers/authController');
const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware');
//route object 

const router=express.Router()


//routing 
//register || METHOD TEST

router.post("/register",registerController)

//login ||post
router.post("/login",loginControllers)


//forget password 

router.post('/forgot-password',forgotPasswordController)

//test routes

router.get('/test',requireSignIn,isAdmin, testController)



//protected User route auth /*
router.get('/user-auth',requireSignIn, (req,res)=>{
    res.status(200).send({ok:true})
;})


//protected Admin route auth
router.get('/admin-auth',requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true})
;})


//update profile
router.put("/profile", requireSignIn, updateProfileController);
 
//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);



module.exports=router;
