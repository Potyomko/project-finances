const { type } = require('@testing-library/user-event/dist/type')
const { Schema, model } = require('mongoose')

const UserModel = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    incomes: {
        type: [{ 
            amount: { type: Number },
            category: { type: String },
            description: { type: String },
            date: { type: Date, default: Date.now() }
        }],
        default: [],
    },
    spendings: {
        type: [{ 
            amount: { type: Number },
            category: { type: String },
            description: { type: String },
            date: { type: Date, default: Date.now() }
        }],
        default: [],
    }
}, {
    timestamps: true
})

module.exports = model('User', UserModel)