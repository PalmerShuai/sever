const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/0930', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const Schema = mongoose.Schema
const carSchema = new Schema({
    uid: String,
    pid: String,
    num: String,
    title: String,
    imgurl: String,

})
const Car = mongoose.model('Car', carSchema, 'car')
module.exports = Car