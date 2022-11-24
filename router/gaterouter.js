var router = require('express').Router()
var gatewayController = require ('../controller/gateway.controller')

//Return all gateways
router.get('/', function(req, res) {
  gatewayController.list(req, res)
})
// Return gateway by ID
router.get('/:gateSerial', function(req, res) {
  gatewayController.show(req, res)
})
//Create new gateway
router.post('/', function(req, res) {
  gatewayController.create(req, res)
})
//Add device to gateway
router.put('/:gateSerial', function(req, res) {
  gatewayController.update(req, res)
})
//Delete gateway
router.delete('/:gateSerial', function(req, res) {
  gatewayController.remove(req, res)
})
//Delete device from
router.delete('/:gateSerial/:deviceID', function(req, res) {
  gatewayController.removeDevices(req, res)
})


module.exports = router