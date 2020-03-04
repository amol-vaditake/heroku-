var mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://amol_vaditake:76xK1QipNcBf7DBY@cluster0-8o5ug.mongodb.net/feb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(function () {
    console.log("Database connected successfully");
  })
  .catch(function (err) {
    console.log(err.message);
  });