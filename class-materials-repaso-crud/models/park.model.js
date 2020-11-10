const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Aquí el esquema

const parkSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
    }
},{
    timestamps: true
})


const Park = mongoose.model("Park", parkSchema)

module.exports = Park