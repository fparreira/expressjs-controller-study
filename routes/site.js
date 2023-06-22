const express = require('express');
const controllerMain = require('../controllers/main');

const router = express.Router();

router.get('/php', controllerMain.php);
router.get('/node', controllerMain.node);
router.get('/express', controllerMain.express);
router.get('/fernando', controllerMain.fernando);
router.get('/', controllerMain.page);


module.exports = router;