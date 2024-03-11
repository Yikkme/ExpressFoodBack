const CommandsModel = require("../models/CommandModels");
const mongoose = require("mongoose");
const {ObjectId} = mongoose.Types;

// Récupérer tous les commands

const getCommands = (async (req,res)=> {
    const commands = await CommandsModel.find();
    res.status(200).json(commands);
});

// Récupérer un command par son ID 

const getCommand = async (req, res) => {
    let id = req.params.id;  
    let objectId = new ObjectId(id);
    try {
        const command = await CommandsModel.findById(objectId);
        if (!produit) {  
            return res.status(404).json({ message: 'command non trouvé' });
        }
        res.status(200).json(command);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
};

// Ajouter command

const addCommand = (async (req, res) => {
    const newCommand =  new CommandsModel(req.body);
    try {
        await newCommand.save();
        res.json(newCommand);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

})


// Modfifier command

const updateCommand = (async (req, res) => {
    const {id} = req.params;
    try{
        const updateCommand = await CommandsModel.findByIdAndUpdate(id, req.body , { new: true });
        if (!updateCommand) {
            return res.status(404).json({ message: 'Command not found' });
        }
        res.json(updateCommand);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
   
})

// Suprimmer command

const deleteCommand = (async (req, res) => {
    const {id} = req.params;
    try{
        const deleteCommand = await CommandsModel.findByIdAndDelete(id);
        if (!deleteCommand) {
            return res.status(404).json({ message: 'Command introuvable' });
        }
        res.status(200).json({ message: 'Command suprimmé' });

    } catch (err) {
          res.status(500).json({ message: err.message });

    }
})

module.exports = {getCommands, getCommand, addCommand, updateCommand, deleteCommand };
