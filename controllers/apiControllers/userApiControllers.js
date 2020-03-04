var User = require("../../models/user")
// THE USERS JSON PATH

module.exports = {
  registeruser: function (req, res) {
    var user = new User({
      ...req.body
    });
    user
      .save()
      .then(function (user) {
        req.session.userId = user._id;
        res.redirect("/login");
      })
      .catch(function (err) {
        console.log(err);
        if (err.name === "ValidationError")
          return res.status(400).send(`Validation Error: ${err.message}`);
      });
  },

  loginuser: function (req, res) {
    // Get the users json file
    var email = req.body.email;
    var password = req.body.password;
    if (!email || !password)
      return res.status(400).send("Incorrect credentials");
    User.findByEmailAndPassword(email, password)
      .then(function (user) {
        req.session.userId = user._id;
        res.redirect("/shoes");
      })
      .catch(function (err) {
        console.log(err.message);
        res.redirect("/login");
      });
  },


  logOutuser: function (req, res) {
    req.session.destroy();
    return res.redirect("/");
  }
};