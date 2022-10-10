const {Schema,model} = require('mongoose')

const atribut = new Schema({
    title: String,
    status: {
        type: Number,
        default:0
    },
    order: {
        type: Number,
        default: 0
    }
})

module.exports = model('Atribut',atribut)


