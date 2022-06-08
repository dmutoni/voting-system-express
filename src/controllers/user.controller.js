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
export {
    createUser  
}