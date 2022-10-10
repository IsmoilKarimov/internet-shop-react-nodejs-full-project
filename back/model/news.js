const {Schema,model} = require('mongoose')

const news = new Schema({
    title:String,
    img:String,
    text:String,
    description:String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Number,
        default:0
    }
})

module.exports = model('News',news)