const Order = require('../../models/Order')

// Create new order
const createNewOrder = async (body) => {
    const { customerId, products, totalAmount, address } = body;

    const newOrder = new Order({
        customerId,
        products,
        totalAmount,
        address,
        status: 'Pending'
    });

    await newOrder.save();
    return newOrder
};

// Get order details by order ID
const getOrderDetailsById = async (params) => {
    const { orderId } = params;
    const order = await Order.findById(orderId);

    if (!order) {
        return {status: 404, message: 'Order not found'};
    }

    return order;
};

// Confirm order after payment
const confirmOrderAfterPayment = async (params) => {
    const { orderId } = params;
    let order = await Order.findById(orderId);

    if (!order) {
        return {status: 404, message: 'Order not found'};
    }

    order.paymentConfirmed = true;
    order.status = 'Confirmed';

    await order.save();

    // Simulate updating inventory in the Product Catalog Service
    try {
        await axios.post('http://localhost:3000/updateInventory', {
            products: order.products
        });
    } catch (error) {
        return {status:500,message: 'Failed to update inventory', error: error.message};
    }

    return order;
};

// Send WhatsApp notification to the owner
const sendNotification = async (params) => {
    const { orderId } = params;
    const order = await Order.findById(orderId);

    if (!order) {
        return {status: 404, message: 'Order not found'};
    }

    // Simulate sending a WhatsApp message to the owner
    try {
        await axios.post('http://localhost:3000/sendWhatsApp', {
            orderId: order._id,
            products: order.products,
            totalAmount: order.totalAmount
        });

        return order;

    } catch (error) {
       return {status:500,message: 'Failed to send notification', error: error.message};
    }
};

module.exports = {
    createNewOrder,
    getOrderDetailsById,
    confirmOrderAfterPayment,
    sendNotification
};
