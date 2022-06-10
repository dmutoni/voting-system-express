import { boolean } from 'joi';
import mongoose, { mongo } from 'mongoose';

mongoose.Promise = global.Promise;

const tokenSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    token: {
        type: number,
        required: true,
        minlength: 8,
        maxlength: 8,
    },
    lastActiveDate: number,
    status: {
        default: 'active',
        type: boolean,
        enum: ['active', 'inactive']
    }
});

const Token = mongoose.model('Token', tokenSchema);
export default Token;