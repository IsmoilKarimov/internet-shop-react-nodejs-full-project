const {Schema,model} = require('mongoose')

const advan = new Schema({
    title: String,
    text: String,
    icon:String,
    status: {
        type: Number,
        default:0
    },
    order: {
        type: Number,
        default: 0
    }
})

module.exports = model('Advan',advan)