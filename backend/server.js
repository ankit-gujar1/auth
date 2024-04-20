require('dotenv').config();

const express=require('express');
const app=express();

const mongoose = require('mongoose');
const cors = require('cors');

const userRouter=require('./routes/userRoutes');
const adminRouter=require('./routes/adminRoutes');
const testRouter=require('./routes/testRoutes');

app.use(cors());
app.use(express.json());

//change MONGO_URI and remaining .env stuff

app.use(userRouter);
app.use(adminRouter);
app.use(testRouter);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("backend is up and running");
    });
})
.catch((e)=>{
    console.log(e);
})

