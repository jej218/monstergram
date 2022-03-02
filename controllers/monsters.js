const Monster = require('../models/monster');

const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); // initialize the S3 constructor

const BUCKET = process.env.BUCKET;
module.exports = {
    create,
    index
}
async function create(req, res, err) {
    try {

        let monster = await new Monster(req.body);
        console.log(monster, 'monster')
        monster.save().then(monster => {

            res.status(201).json({ monster })
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({ err })
    }

}

async function index(req, res) {
    try {
        const monsters = await Monster.find({}).populate("user").exec();
        res.status(200).json({ monsters: monsters });
    } catch (err) {
        res.status(400).json({ err });
    }
}
