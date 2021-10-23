
const express = require('express');
const router = express.Router();

//Importo modelo de datos
const ProvinciaController = require('../controllers/provinciasController');

// End-points CRUD movies
router.get('/', ProvinciaController.getAll);
router.get('/:id', ProvinciaController.getById);
router.post('/', ProvinciaController.create);
router.put('/:id', ProvinciaController.update);
router.delete('/:id', ProvinciaController.delete);

module.exports = router;