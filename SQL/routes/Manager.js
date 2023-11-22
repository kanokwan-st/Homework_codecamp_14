const express = require('express');
const router = express.Router();
const managerControllers = require('../controllers/Manager')

router.get('/', managerControllers.getAllManagers);
router.get('/:id', managerControllers.getAllManagerById);
router.post('/', managerControllers.createManager);
router.put('/:id', managerControllers.updateManager);
router.delete('/:id', managerControllers.deleteManager);


module.exports = router;