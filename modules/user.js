const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: string,
        required: true
    }
});