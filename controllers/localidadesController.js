const localidades = require('../models/localidadesModel');
const localidadesController = {};

localidadesController.getAll = (req, res) => {
    res.json(localidades.findAll());
};

localidadesController.getByid = (req, res) => {
    const {id} = req.params;
    res.json(localidades.findByid(id));
};

localidadesController.create = (req, res) => {
    const {id, nombre, poblacion, cp, capital_pro, capital_ca, fk_provincia} = req.body;
    const localidad = {id, nombre, poblacion, cp, capital_pro, capital_ca, fk_provincia};
    res.json(localidades.post(localidad)); 
};

localidadesController.update = (req, res) => {
    const {id} = req.params;
    const body = req.body;
    res.json(localidades.update({id, ...body}));
};

localidadesController.delete = (req, res) => {
    const {id} = req.params;
    res.send(localidades.delete(id));
};

module.exports = localidadesController;