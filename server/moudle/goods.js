const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/0930', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Schema = mongoose.Schema
const goodsSchema = new Schema({
    title: String,
    imgurl: String,
    price: String,
    desc: String,
    kind: String,
    hot: String
})
const Goods = mongoose.model('Goods', goodsSchema, 'goods')
module.exports = Goods