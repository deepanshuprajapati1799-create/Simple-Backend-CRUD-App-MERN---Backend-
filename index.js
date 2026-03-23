require('dotenv').config();
const express = require('express')
const Product= require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const mongoose = require("mongoose");
const app = express()
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/products',productRoute);



app.get('/',(req,res) => {
res.send("Hello from Node API server for Deepanshu Prajapati");
});


// connect DB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});