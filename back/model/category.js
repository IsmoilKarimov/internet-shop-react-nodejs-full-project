const {Schema,model} = require('mongoose')

const category = new Schema({
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

module.exports = model('Category',category)