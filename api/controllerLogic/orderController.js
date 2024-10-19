const orderBusiness = require('../businessLogic/orderBusiness');

const createNewOrder = (req, res) => {
  orderBusiness.createNewOrder(req.body).then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

const getOrderDetailsById = (req, res) => {
  orderBusiness.getOrderDetailsById(req.params).then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

const confirmOrderAfterPayment = (req, res) => {
  orderBusiness.confirmOrderAfterPayment(req.params).then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

const sendNotification = (req, res) => {
  orderBusiness.sendNotification(req.params).then(async (response) => {
    res.status(200).send(response)
  }).catch(async (error) => {
    res.status(error.status).send(response)
  });
};

module.exports = {
  createNewOrder,
  getOrderDetailsById,
  confirmOrderAfterPayment,
  sendNotification
};