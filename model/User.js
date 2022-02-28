const { Schema, model } = require('mongoose')

const User = new Schema({
    username: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'USER'
    }
})

module.exports = model('User', User)