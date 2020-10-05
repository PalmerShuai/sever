// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/0923', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// const Schema = mongoose.Schema
// const movieSchema = new Schema({
//     title: String,
//     imgurl: String,
//     stars: String,
//     ratings: String,
//     description: String,
//     p: {
//         type: mongoose.SchemaTypes.ObjectId, //指名数据类型
//         ref: 'City' // 这个写的是city.js里面的model
//     }
// })
// const Movie = mongoose.model('Movie', movieSchema, 'movie')
// module.exports = Movie