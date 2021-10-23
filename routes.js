const localidadesRouter = require('./routes/localidadesRoute');
const provinciasRouter = require('./routes/provinciasRoute');
const ccaaRouter = require('./routes/ccaaRoute');
const router = require('express').Router();

router.use('/localidades', localidadesRouter);
router.use('/provincias', provinciasRouter);
router.use('/ccaa', ccaaRouter);

module.exports = router;