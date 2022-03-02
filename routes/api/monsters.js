const express = require('express');
const router = express.Router();
const monstersCtrl = require('../../controllers/monsters');
const multer = require('multer');
const upload = multer(); // <- handles multipart/formdata requests(photos)

router.post('/', isAuthenticated, monstersCtrl.create);
router.get('/', monstersCtrl.index)

function isAuthenticated(req, res, next) {
    if (req.user) {
        next()
    } else {
        res.status(401).json({ data: 'Not Authorized!' })
    }
}


module.exports = router;
