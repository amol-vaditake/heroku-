var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String
  }
}, {
  timestamps: true
});

var products = mongoose.model("products", productsSchema);

module.exports = products;