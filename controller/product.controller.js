const Product = require('../models/product.model.js')
const getProducts = async (req,res) =>{
    try {
       const products = await Product.find({});
       res.status(200).send({products});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getProduct = async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
const createProducts = async (req,res) =>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json({product});

    }catch (Error){
        res.status(500).json({message: Error.message});
    }

};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if(!product) {
            return res.status(404).send("Product not found");
        }

        res.send(product)
    } catch (error) {
    res.status(500).json({message: error.message});
    
}
};

const deleteProduct = async(req,res) => {
    try {
        const {id}= req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404).send("Product Not Found");
        }
        res.status(200).send("Product deleted succesfully");
        
    } catch (error) {
        res.status(500).json({"Error is":error});
    }
};

module.exports={getProducts,getProduct,createProducts,updateProduct,deleteProduct};