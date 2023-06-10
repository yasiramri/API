import User from "../models/UserModel.js";

export const getUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getUserById = async (req,res) => {
    try {
        const user = await User.findById(req.params.id); 
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveUser = async (req,res) => {
    const { judulBuku, penulis, hargaBuku } = req.body;

    const newuser = new User({judulBuku, penulis, hargaBuku});
    try {
        const inserteduser = await newuser.save();
        console.log(inserteduser)
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateUser = async (req,res) => {
    const user = new User(req.body);
    try {
        const updateuser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateuser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteUser = async (req,res) => {
    const user = new User(req.body);
    try {
        const deleteduser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}