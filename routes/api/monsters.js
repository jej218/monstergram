const express = require('express');
const router = express.Router();
const monstersCtrl = require('../../controllers/monsters');

router.post('/', monstersCtrl.create);
router.get('/', monstersCtrl.index)






module.exports = router;
