//incluimos Mongoose y abrimos una conexión
var mongoose = require('mongoose')
var MONGO_URL = 'mongodb://localhost/db'
mongoose.connect(MONGO_URL)

mongoose.connection.on('connected', function () {
  console.log('Connected to the database: ' + MONGO_URL)
})

mongoose.connection.on('error',function (err) {
  console.log('Error connecting to database: ' + err)
})

mongoose.connection.on('disconnected', function () {
  console.log('Disconnected from the database')
})

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Disconnected from the database when finishing the app')
    process.exit(0)
  })
})