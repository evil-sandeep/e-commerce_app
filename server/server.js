import express from 'express';   
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import products from './data/products.js';
const app=express();

dotenv.config(); //dotnet config
connectDB();

app.get('/',(req,res)=>{
    res.send('Api in Runnnnnning.......');
})

app.get('/api/products',(req,res)=>{
  res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const product=products.find((p)=>p._id ===req.params.id)
    res.json(product )
})

const PORT=process.env.PORT || 5000


app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} in ${PORT} prot`));