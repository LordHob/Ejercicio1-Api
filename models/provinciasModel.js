let db = require('../dbs/provinciasDB');

ProvinciaModel = {};

ProvinciaModel.findAll = () => db;

ProvinciaModel.findById = (id) => db.find(Provincia => Provincia.id == id);

ProvinciaModel.post = (newProvincia) => {
    //let Provincias = db.filter(Provincia => Provincia.id != newProvincia.id);
    db.push(newProvincia);
    return newProvincia;
}

ProvinciaModel.update = (newProvincia) => {
    let Provincias = db.filter(Provincia => Provincia.id != newProvincia.id);
    Provincias.push(newProvincia);
    db = Provincias;
    return newProvincia;
}

ProvinciaModel.delete = (id) => {
    let Provincias = db.filter(Provincia => Provincia.id != id);
    db = Provincias;
    return `Registro ${id} eliminado correctamente`;
}


module.exports = ProvinciaModel;