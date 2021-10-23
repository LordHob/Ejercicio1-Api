const express = require('express');
const router = express.Router();
const localidadesController = require('../controllers/localidadesController')

router.get('/', localidadesController.getAll);

router.get('/:id', localidadesController.getByid);

router.post('/', localidadesController.create);

router.put('/:id', localidadesController.update);

router.delete('/:id', localidadesController.delete);

module.exports = router;