const express = require('express')
const Product= require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const mongoose = require("mongoose");
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/products',productRoute);



app.get('/',(req,res) => {
res.send("Hello from Node API server for Deepanshu Prajapati");
});


mongoose.connect("mongodb://Deepanshu1799:deep123@ac-12iorp1-shard-00-00.bxf576p.mongodb.net:27017,ac-12iorp1-shard-00-01.bxf576p.mongodb.net:27017,ac-12iorp1-shard-00-02.bxf576p.mongodb.net:27017/?ssl=true&replicaSet=atlas-h4qw9c-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
    console.log("Connected");
    app.listen(5000,() => {
        console.log("Server running on port 5000")
    });
})
.catch((err) => {
    console.log("FULL ERROR:", err);
});