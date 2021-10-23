const express = require('express');
const router = express.Router();

const ccaaController = require('../controllers/ccaaController');

router.get('/', ccaaController.getAll);
router.get('/:id', ccaaController.getById);
router.post('/', ccaaController.create);
router.put('/:id', ccaaController.update);
router.delete('/:id', ccaaController.delete);

module.exports = router;