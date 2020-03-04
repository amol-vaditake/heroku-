var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ordersSchema = new Schema({
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
    cartId: {
        type: Schema.Types.ObjectId,
        ref: "cart"
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
}, {
    timestamps: true
});

var orders = mongoose.model("orders", ordersSchema);

module.exports = orders;