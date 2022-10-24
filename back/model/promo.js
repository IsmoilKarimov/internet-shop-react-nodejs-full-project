const {Schema,model} = require('mongoose')

const promo = new Schema({
    title:String,
    deadline: Date,
    description:String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Number,
        default:0
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref:'Product'
    }]
})

module.exports = model('Promo',promo)