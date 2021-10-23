let ccaaDB = require('../dbs/ccaaDB');

ccaaModel = {};

ccaaModel.findAll = () => ccaaDB;

ccaaModel.findById = (id) => ccaaDB.find(ccaa => ccaa.id == id);

ccaaModel.post = (newccaa) => {
    ccaaDB.push(newccaa);
    return newccaa;
}

ccaaModel.update = (newccaa) => {
    let ccaa = ccaaDB.filter(ccaa => ccaa.id != newccaa.id);
    ccaa.push(newccaa);
    ccaaDB = ccaa;
    return newccaa;
}

ccaaModel.delete = (id) => {
    let ccaa = ccaaDB.filter(ccaa => ccaa.id != id);
    ccaaDB = ccaa;
    return `Registro ${id} eliminado correctamente`;
}

module.exports = ccaaModel;