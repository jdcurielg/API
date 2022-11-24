
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var GateSchema = new Schema({ 

  serial: String,
    name: String,
    ipv4: String,    
    pdevices: [{
        uid: Number,
        createdDate: Date,
        vendor: String,
        status: Boolean
      }]
})

var Gateway = mongoose.model('Gateway', GateSchema)

module.exports = Gateway