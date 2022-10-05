const {Schema,model} = require('mongoose')

const review = new Schema({
    name:String,
    work:String,
    avatar:String,
    text:String,
    mark:Number,
    status: {
        type: Number,
        default:0
    }
})

module.exports = model('Review',review)