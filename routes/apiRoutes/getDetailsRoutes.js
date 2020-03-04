var express = require("express");
var authenticate = require("../../middlewares/authenticate");
var router = express.Router();
var Products = require("../../models/product");
var Cart = require("../../models/cart");
var Order = require("../../models/order");
var fetch = require("node-fetch");



router.get("/products", function (req, res) {
    Products.find().then(function (products) {
        res.send(products);
    }).catch(function (err) {
        console.log(err);
    });
});

router.get("/cartProducts", authenticate, function (req, res) {
    Cart.find({
            userId: {
                $in: [req.session.userId]
            }
        })
        .then(function (products) {
            return res.status(200).json(products);
        })
        .then(function (products) {
            res.send(products);
        }).catch(function (err) {
            console.log(err);
        });
});

router.get("/products2", function (req, res) {
    Products.find({
        category: {
            $in: ["Male"]
        }
    }).then(function (products) {
        res.send(products);
    }).catch(function (err) {
        console.log(err);
    });
});


router.get("/products3", function (req, res) {
    Products.find({
        category: {
            $in: ["Female"]
        }
    }).then(function (products) {
        res.send(products);
    }).catch(function (err) {
        console.log(err);
    });
});

router.get("/products4", function (req, res) {
    Products.find({
        category: {
            $in: ["Kids"]
        }
    }).then(function (products) {
        res.send(products);
    }).catch(function (err) {
        console.log(err);
    });
});



router.get("/shoes/mens/:shoeId", function (req, res) {
    var id = req.params.shoeId;
    Products.find({
        _id: {
            $in: [id]
        }
    }).then(function (products) {
        res.render("home", {
            title: "product",
            products
        });
    }).catch(function (err) {
        console.log(err);
    });
})


router.get("/shoes/women/:shoeId", function (req, res) {
    var id = req.params.shoeId;
    Products.find({
        _id: {
            $in: [id]
        }
    }).then(function (products) {
        res.render("home", {
            title: "product",
            products
        });
    }).catch(function (err) {
        console.log(err);
    });
})
router.get("/shoes/kids/:shoeId", function (req, res) {
    var id = req.params.shoeId;
    Products.find({
        _id: {
            $in: [id]
        }
    }).then(function (products) {
        res.render("home", {
            title: "product",
            products
        });
    }).catch(function (err) {
        console.log(err);
    });
})


module.exports = router;