var express = require('express');
var db = require ('./utils/db');
var app = express();
var dotenv = require('dotenv');
var Razorpay = require('razorpay');
dotenv.config();
db.connect();
var cors = require('cors');
app.use(express.json());
app.use(cors());
var UserRouter = require('./routes/users.routes');
var ProductRouter = require('./routes/products.routes');
app.use('/user',UserRouter);
app.use('/product',ProductRouter);

/*--------------------%    RAZORPAY INTEGRATION  %------------------------------------------*/ 
const razorpayInstance = new Razorpay({
  
  // Replace with your key_id
  key_id: "rzp_test_vx9bFQM8cadAk1",

  // Replace with your key_secret
  key_secret: "pliOnTcYD1p9pHPAI4WMBK9g"
});

//Inside app.js
app.post('/createOrder', (req, res)=>{ 
  
  // STEP 1:
  const {amount,currency,receipt}  = req.body;      
        
  // STEP 2:    
  razorpayInstance.orders.create({amount, currency, receipt}, 
      (err, order)=>{
        
        //STEP 3 & 4: 
        if(!err)
          res.json(order)
        else
          res.send(err);
      }
  )
});






/*--------------------%    Server Port  %------------------------------------------*/ 
app.listen(process.env.Port_No, () => {
  console.log("server started in", process.env.Port_No);
});
