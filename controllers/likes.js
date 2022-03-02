const Monster = require('../models/monster')

module.exports = {
    create,
    deleteLike
}
async function create(req, res) {

    try {
        const monster = await Monster.findById(req.params.id);
        monster.likes.push({ username: req.user.username, userId: req.user._id });
        await monster.save()// save it
        res.status(201).json({ data: 'like added' })
    } catch (err) {

        res.status(400).json({ err })
    }

}
async function deleteLike(req, res) {
    try {

        const monster = await Monster.findOne({ 'likes._id': req.params.id, 'likes.username': req.user.username });
        monster.likes.remove(req.params.id)
        await monster.save()
        res.json({ data: 'like removed' })
    } catch (err) {
        res.status(400).json({ err })
    }
}
