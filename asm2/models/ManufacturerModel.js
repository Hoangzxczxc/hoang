var mongoose = require('mongoose');
var ManufacturerSchema = mongoose.Schema({
    name: String,
    year: String,
    image: String,
});

var ManufacturerModel = mongoose.model('manufacturers', ManufacturerSchema);
module.exports = ManufacturerModel;