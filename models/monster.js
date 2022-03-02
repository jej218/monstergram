const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})


const monsterSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    imageUrl: String,
    title: String,
    caption: String,
    likes: [likesSchema]
})

module.exports = mongoose.model('Monster', monsterSchema);
