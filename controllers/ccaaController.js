//Importo modelo de datos
const ccaa = require('../models/ccaaModel');

const ccaaController = {};

ccaaController.getAll = (req, res) => {
    res.json(ccaa.findAll());
};

ccaaController.getById = (req, res) => {
    const id = req.params.id;
    res.json(ccaa.findById(id));
}

ccaaController.create = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const poblacion = req.body.poblacion;
    const superficie = req.body.superficie; 
    const newccaa = { id, nombre, poblacion, superficie };
    res.json(ccaa.post(newccaa));
};

ccaaController.update = (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    const poblacion = req.body.poblacion;
    const superficie = req.body.superficie;
    res.json(ccaaModel.update({ id, nombre, poblacion, superficie }));
};

ccaaController.delete = (req, res) => {
    const { id } = req.params;
    res.json(ccaaModel.delete(id));
};

module.exports = ccaaController;