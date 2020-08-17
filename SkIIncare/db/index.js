const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const productSchema = new mongoose.Schema({
  product: {
    category: String,
    item: String,
    size: String,
    status: String,
    price: Number,
    purchase_date: Date,
    expiration_date: Date,
    repurchase: Boolean,
    notes: String,
    favorites: Boolean,
  },
  wishList: Array,
  alerts: Array,
  toBuy: Array,

});

const Product = mongoose.model('Product', productSchema);

const selectAll = function(callback) {
  Product.find({}, function(err, products) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, products);
    }
  });
};

const addToInventory = (req, res) => {
  let details = req.body
  console.log(details);
  Product.insert(details, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }
  })
}

module.exports = {
  selectAll,
  addToInventory
}