const mongoose = require('mongoose')

const InternSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    college: {
        type: String,
        trim: true
    },
    year: {
        type: String
    },
    email: {
        type: String,
        trim: true,
    },
    donations: {
        type: Number,
        default: 0
    }
})

const Intern = mongoose.model("Intern", InternSchema);

module.exports = Intern;