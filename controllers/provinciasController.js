//Importo modelo de datos
const provinciasModel = require('../models/provinciasModel');

const ProvinciaController = {};

ProvinciaController.getAll = (req, res) => {
    res.json(provinciasModel.findAll());
};

ProvinciaController.getById = (req, res) => {
    const id = req.params.id;
    res.json(provinciasModel.findById(id));
}

ProvinciaController.create = (req, res) => {
    const id = req.body.id;
    const body = req.body;
    const provincia = {id, ...body};
    res.json(provinciasModel.post(provincia));
};

ProvinciaController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(provinciasModel.update({id, ...body}));
};

ProvinciaController.delete = (req, res) => {
    const {id} = req.params;
    res.json(provinciasModel.delete(id));
};


module.exports = ProvinciaController;