const mongoose = require('mongoose');

const operationSchema = new mongoose.Schema({
    value1: {
        type: Number,
        required: true
    },
    value2: {
        type: Number,
        required: true
    },
    result: {
        type: Number
    }
}, { Timestamp: true })

const Operations = mongoose.model('Operations', operationSchema);
module.exports = Operations;