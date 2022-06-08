const { default: mongoose } = require('mongoose');

const DBConnection = mongoose.createConnection('mongodb+srv://mdenyse:Denx@2020@cluster0.wobsa.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('DB Connected');
}).catch(err => {
    console.log(err.message);
})

export default DBConnection;