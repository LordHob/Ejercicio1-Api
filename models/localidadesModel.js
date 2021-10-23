let db = require('../dbs/localidadesDB');

localidadesModel = {};

localidadesModel.findAll = () => db;

localidadesModel.findByid = (id) => db.find(localidades => localidades.id == id);

localidadesModel.post = (newLocalidad) => {
    db.push(newLocalidad);
    return newLocalidad;
};

localidadesModel.update = (newLocalidad) => {
    let localidades = db.filter(localidades => localidades.id != newLocalidad.id);
    localidades.push(newLocalidad);
    db = localidades;
    return newLocalidad;
}

localidadesModel.delete = (id) => {
    let localidades = db.filter(localidades => localidades.id != id);
    db = localidades;
    return `Registro ${id} eliminado`;
}

module.exports = localidadesModel;