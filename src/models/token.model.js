import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const tokenSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    token: {
        type: Number,
        required: true,
        minlength: 8,
        maxlength: 8,
    },
    lastActiveDate: Number,
    status: {
        default: 'ACTIVE',
        type: String,
        enum: ['ACTIVE', 'INACTIVE']
    },
    meterNumber: {
        type: Number,
        required: true,
        minlength: 6,
        maxlength: 50
    }

});

const Token = mongoose.model('Token', tokenSchema);
export default Token;