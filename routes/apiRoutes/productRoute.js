var express = require("express");
var authenticate = require("../../middlewares/authenticate");
var router = express.Router();
var Products = require("../../models/product");
var Cart = require("../../models/cart");
var Order = require("../../models/order");
var fetch = require("node-fetch");


router.get("/shoes", authenticate, function (req, res) {
    var products = fetch(`http://localhost:${PORT}/products`)
        .then(function (products) {
            return products.json();
        })
        .then(function (products) {
            res.render("home", {
                title: "product",
                products,
                type: "home"
            });
        }).catch(function (err) {
            console.log(err);
        });
});

router.get("/shoes/mens", authenticate, function (req, res) {
    var products = fetch(`http://localhost:${PORT}/products2`)
        .then(function (products) {
            return products.json();
        })
        .then(function (products) {
            res.render("home", {
                title: "mens products",
                products
            });
        }).catch(function (err) {
            console.log(err);
        });
});

router.get("/shoes/women", authenticate, function (req, res) {
    var products = fetch(`http://localhost:${PORT}/products3`)
        .then(function (products) {
            return products.json();
        })
        .then(function (products) {
            res.render("home", {
                title: "mens products",
                products
            });
        }).catch(function (err) {
            console.log(err);
        });
});

router.get("/shoes/kids", authenticate, function (req, res) {
    var products = fetch(`http://localhost:${PORT}/products4`)
        .then(function (products) {
            return products.json();
        })
        .then(function (products) {
            res.render("home", {
                title: "kids product",
                products
            });
        }).catch(function (err) {
            console.log(err);
        });
});

router.get("/mens", authenticate, function (req, res) {
    var products = fetch(`http://localhost:${PORT}/products2`)
        .then(function (products) {
            return products.json();
        })
        .then(function (products) {
            res.render("home", {
                title: "mens products",
                products
            });
        }).catch(function (err) {
            console.log(err);
        });
});

router.get("/women", authenticate, function (req, res) {
    var products = fetch(`http://localhost:${PORT}/products3`)
        .then(function (products) {
            return products.json();
        })
        .then(function (products) {
            res.render("home", {
                title: "womens products",
                products
            });
        }).catch(function (err) {
            console.log(err);
        });
});

router.post("/cart", function (req, res) {
    var cart = new Cart({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        orderId: req.body.id,
        userId: req.session.userId,
        image: req.body.image
    });
    cart.save().then(function (cart) {
        res.redirect("/cart");
    });
    res.redirect("/cart");
});

router.get("/cart", authenticate, function (req, res) {
    Cart.find({
            userId: {
                $in: [req.session.userId]
            }
        })
        .then(function (products) {
            return products;
        })
        .then(function (products) {
            res.render("cart", {
                title: "cart",
                products
            });
        })
        .catch(function (err) {
            console.log(err);
        });
});

router.get("/orders", authenticate, function (req, res) {
    Order.find({
            userId: {
                $in: [req.session.userId]
            }
        })
        .then(function (products) {
            return products;
        })
        .then(function (products) {
            res.render("order", {
                title: "order",
                products
            });
        })
        .catch(function (err) {
            console.log(err);
        });
});

router.post("/orders", function (req, res) {
    var order = new Order({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        orderId: req.body.id,
        userId: req.session.userId,
        image: req.body.image
    });
    order.save().then(function (cart) {
        res.redirect("/orders");
    });
    res.redirect("/orders");
});

router.get("/kids", authenticate, function (req, res) {
    var products = fetch(`http://localhost:${PORT}/products4`)
        .then(function (products) {
            return products.json();
        })
        .then(function (products) {
            res.render("home", {
                title: "kids product",
                products
            });
        }).catch(function (err) {
            console.log(err);
        });
});

module.exports = router;