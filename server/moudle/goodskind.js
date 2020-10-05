const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/0930', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Schema = mongoose.Schema

const goodskindSchema = new Schema({
    goodskindname: String,

})

const Goodskind = mongoose.model('Goodskind', goodskindSchema, 'Goodskind')

// City.create({
//     name: "郑州",
//     index: "Z"
// })

module.exports = Goodskind