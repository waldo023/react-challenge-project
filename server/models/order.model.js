const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  order_item: String,
  quantity: Number,
}, {
  timestamps: true,
  collection: 'Orders',
});

export default mongoose.model('Order', OrderSchema);