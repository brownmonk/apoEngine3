/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    crypto = require('bcrypt-nodejs');

module.exports = function(){
  return mongoose.model('Stock', StockSchema);
}

/**
 * Stock Schema
 */
var StockSchema = new Schema({
  ownerId : ObjectId,
  title: String,
  price: Number,
  creationDate: Date
})

StockSchema.virtual('stockId').get(function() {
  return this._id;
});
