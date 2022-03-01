const Monster = require('../models/monster');

module.exports = {
    create,
    index
}

function create(req, res) {
    res.json({ data: 'working' })
}

async function index(req, res) {
    try {
        const monsters = await Monster.find({}).populate("user").exec();
        res.status(200).json({ monsters: monsters });
    } catch (err) {
        res.status(400).json({ err });
    }
}
