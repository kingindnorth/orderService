// models/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerId: String,
    products: [{
        productId: String,
        name: String,
        quantity: Number,
        price: Number,
        totalPrice: Number
    }],
    totalAmount: Number,
    status: {
        type: String,
        default: 'Pending'
    },
    address: String,
    paymentConfirmed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Order', orderSchema);