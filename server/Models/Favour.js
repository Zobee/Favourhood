const mongoose = require("mongoose")

const favourSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    tags: {
        type: Array,
        default: []
    },
    creator: {
        type: String,
        required: true
    },
    acceptor: {
        type: String,
        default: ""
    }

}, {timestamps: true})

module.exports = mongoose.model("Favour", favourSchema);