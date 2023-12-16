var mongoose = require('mongoose');
var ToySchema = mongoose.Schema({
    model: String, 
    Size: String,
    Price: String,
    image: String,
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brands' // 'brands': collection
    }
});

var ToyModel = mongoose.model('toys', ToySchema);    // 'toys': collection
module.exports = ToyModel;