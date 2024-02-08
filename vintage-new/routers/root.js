const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const productController = require('../controllers/productController');

router.get('/', homeController.loadHomePage);
router.get('/index(.html)', homeController.loadHomePage);

router.get('/getProductById/:id', productController.getProductById);

router.get('/login(.html)?', (req, res) => {
    res.render('login');
});
router.get('/register(.html)?', (req, res) => {
    res.render('register');
});

module.exports = router;