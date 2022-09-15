const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('mentor', mentorSchema);
