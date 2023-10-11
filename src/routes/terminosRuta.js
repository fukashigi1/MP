const express = require('express');
const router = express.Router();
const terminosController = require('../controllers/terminosController');

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.get('/', terminosController.view);
module.exports = router;