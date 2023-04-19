const {Router} = require('express');
const router = Router();
const user= require("./users");
const driver = require("./drivers");
const travel = require("./travels")
// Configurar los routers

router.use('/usuarios', user);
router.use('/conductoras/', driver);
router.use('/viajes', travel);

module.exports = router;