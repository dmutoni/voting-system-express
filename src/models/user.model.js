import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { registerDefinition, registerSchema } from 'swaggiffy';
mongoose.Promise = global.Promise;


const obj = {
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100
    },
    gender: {
        type: String,
        enum: ['female', 'male'],
        required: true
    },
    votes: {
        type: Number,
        required: true
    },
    role: {
        default: 'Standard',
        type: String,
        enum: ['Standard', 'Candidate', 'Admin']
    }
}
const userSchema = new mongoose.Schema(obj);

userSchema.methods.generateAuthToken = async function () {
    return await jwt.sign( {
        id: this._id,
        name: this.name,
        email: this.email,
        gender: this.gender,
        role: this.role,
    }, process.env.TOKEN_SECRET )
}
registerSchema('User', obj)
const User = mongoose.model('User', userSchema);

export default User;

