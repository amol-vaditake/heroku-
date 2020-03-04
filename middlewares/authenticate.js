user = require("../models/user")
module.exports = function (req, res, next) {
  if (req.session.userId) {
    user.findById(req.session.userId).then(function (user) {
        req.user = user;
        next()
      })
      .catch(function (err) {
        console.log(err.massage);
        res.send("/login")
      })
    // Grabbing the user.
  } else res.redirect("/login");
};