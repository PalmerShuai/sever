const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/0930', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String
})

const User = mongoose.model('User', userSchema, 'user')

// City.create({
//     name: "郑州",
//     index: "Z"
// })

module.exports = User