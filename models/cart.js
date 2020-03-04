var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cartsSchema = new Schema({
    name: {
        unique: true,
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
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
}, {
    timestamps: true
});

var carts = mongoose.model("carts", cartsSchema);

module.exports = carts;