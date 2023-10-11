const controller = {};
const path = require('path');

controller.view = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'terminos.html'));
};

module.exports = controller;