const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})


const monsterSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    photoUrl: String,
    name: String,
    caption: String,
    likes: [likesSchema]
})

module.exports = mongoose.model('Monster', monsterSchema);
