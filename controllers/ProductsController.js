const ProductsModel = require("../models/ProductModels");
const mongoose = require("mongoose");
const {ObjectId} = mongoose.Types;

// Récupérer tous les products

const getProducts = (async (req,res)=> {
    const products = await ProductsModel.find();
    res.status(200).json(products);
});

// Récupérer un product par son ID 

const getProduct = async (req, res) => {
    let id = req.params.id;  
    let objectId = new ObjectId(id);
    try {
        const product = await ProductsModel.findById(objectId);
        if (!product) {  
            return res.status(404).json({ message: 'Product non trouvé' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
};

// Ajouter product

const addProduct = (async (req, res) => {
    const newProduct =  new ProductsModel(req.body);
    try {
        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

})

// Modfifier product

const updateProduct = (async (req, res) => {
    const {id} = req.params;
    try{
        const updateProduct = await ProductsModel.findByIdAndUpdate(id, req.body , { new: true });
        if (!updateProduct) {
            return res.status(404).json({ message: 'Film not found' });
        }
        res.json(updateProduct);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
   
})

// Suprimmer product

const deleteProduct = (async (req, res) => {
    const {id} = req.params;
    try{
        const deleteProduct = await ProductsModel.findByIdAndDelete(id);
        if (!deleteProduct) {
            return res.status(404).json({ message: 'Product introuvable' });
        }
        res.status(200).json({ message: 'Product suprimmé' });

    } catch (err) {
          res.status(500).json({ message: err.message });

    }
})

module.exports = {getProducts , getProduct , addProduct , updateProduct, deleteProduct};