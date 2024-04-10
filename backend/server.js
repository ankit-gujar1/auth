require('dotenv').config();

const express=require('express');
const app=express();

const mongoose = require('mongoose');
const cors = require('cors');

const userRouter=require('./routes/userRoutes')

app.use(cors());
app.use(express.json());

app.use(userRouter);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("backend is up and running");
    });
})
.catch((e)=>{
    console.log(e);
})

