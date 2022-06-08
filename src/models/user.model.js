import mongoose from 'mongoose';
import { GenderEnum, RoleEnum } from '../enums/enums';

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
        type: GenderEnum,
        required: true
    },
    role: {
        default: RoleEnum,
        type: RoleEnum
    }
});

export default mongoose.model('User', userSchema);
