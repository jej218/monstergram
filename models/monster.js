const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})


const monsterSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    imageUrl: String,
    title: String,
    caption: String,
    likes: [likesSchema]
})

module.exports = mongoose.model('Model', monsterSchema);