import mongoose from 'mongoose';

mongoose = global.Promise;

const meterSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    meterNumber: {
        type: number,
        required: true,
        minlength: 6,
        maxlength: 50
    }
});

const Meter = mongoose.model('Meter', meterSchema);

export default Meter;