
var express = require('express') 
var app = express()       
var bodyParser = require('body-parser')        

var port = process.env.PORT || 8080  
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())        
    
var db = require('./db/db');

var router = require('./router/gaterouter')
app.use('/api', router)


app.listen(port)
console.log('API listening on port ' + port)
