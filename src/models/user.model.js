import mongoose from 'mongoose';
import { GenderEnum, RoleEnum } from '../enums/enums.js';

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
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
        maxlength: 40
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 40
    },
    gender: {
        type: String,
        enum: ['female', 'male'],
        required: true
    },
    role: {
        default: 'Standard',
        type: String,
        enum: ['Standard', 'Candidate', 'Admin']
    }
});

const User = mongoose.model('User', userSchema);
export default User;

