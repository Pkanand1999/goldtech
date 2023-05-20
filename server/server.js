const express= require('express');
const cors = require('cors');
const morgan = require('morgan');
const Database = require('./db');
const uesrRouter= require('./router/userRouter')

require('dotenv').config()

// rest object
const app=express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan("dev"));
app.use('/public/v2',uesrRouter)


// port listining
const port=3003;
Database();
app.listen(port,()=>{
    console.log(`listening on port  ${port}`);
});