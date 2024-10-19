const orderService = require("../serviceLogic/orderService")

const createNewOrder = async (body) => orderService.createNewOrder(body)
const getOrderDetailsById = async (params) => orderService.getOrderDetailsById(params)
const confirmOrderAfterPayment = async (params) => orderService.confirmOrderAfterPayment(params)
const sendNotification = async (params) => orderService.sendNotification(params)

module.exports = {
    createNewOrder,
    getOrderDetailsById,
    confirmOrderAfterPayment,
    sendNotification
  };