const {Router} = require('express');
const router = Router();
const user= require("./users");
const driver = require("./drivers");

// Configurar los routers

router.use('/usuarios', user);
router.use('/conductoras/', driver);

module.exports = router;