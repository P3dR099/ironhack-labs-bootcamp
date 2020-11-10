const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Aquí el esquema

const coasterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    inversions: {
        type: Number,
    },
    length: {
        type: Number
    },
    active: {
        type: Boolean,
        required: true
    },
    park: 
        { type: Schema.Types.ObjectId,
            ref: "Park"
        },
    
}, {
    timestamps: true
})


module.exports = mongoose.model('Coaster', coasterSchema)