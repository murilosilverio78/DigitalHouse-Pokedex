const express = require('express');

const controller = require('../controllers/LegendariesController');
const validator = require('../middlewares/LegendariesValidator');

const router = express.Router();

/* GET legendaries. */
router.get('/', controller.index);
router.post('/', validator, controller.create);
router.put('/:id', validator, controller.update);

module.exports = router;
