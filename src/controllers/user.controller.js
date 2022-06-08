import User from '../models/user.model.js';

const createUser = async (req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender
    });
    return await user.save().then(() => {
        res.status(201).json({message: 'User registered successfully', data: user})
    }).catch((err) => {
        res.status(400).json({message: 'Error registering user', error: err.message})
    })
}

const getUsers = async (req,res) => {
    return await User.find().then((users) => {
        res.status(200).json({message: 'Users retrieved successfully', data: users})
    }).catch((err) => {
        res.status(400).json({message: 'Error retrieving users', error: err.message})
    });
}

export {
    createUser ,
    getUsers
}