let Gateways = require('../models/gateway.model')
let helpers = require('../helpers/helpers')
module.exports = {

//list all gateways
list: function(req, res) {
  Gateways.find(function(err, gateways){
    if(err) {
      return res.status(500).json({
        message: 'Gateway not found'
      })
    }
    return res.json(gateways)
  })
},
show: function(req, res) {
  let gateSerial = req.params.gateSerial
  Gateways.findOne({serial: gateSerial}, function(err, gateway){
    if(err) {
      return res.status(500).json({
        message: 'Gateway not found'
      })
    }
    if(!gateway) {
      return res.status(404).json( {
        message: 'Gateway not found'
      })
    }
    return res.json(gateway)
  })
},
//Create new gateway
create: function(req, res) {
  let gateway = new Gateways (req.body)
	if( helpers.validateIp(gateway.ipv4)){
		gateway.save(function(err, gateway){
			if(err) {
				return res.status(500).json( {
					message: 'There was an error saving the gateway',
					error: err
				})
			}
			return res.status(201).json({
				message: 'saved',				
				serial: gateway.serial
			})
		})
	}else{
		return res.status(500).json( {
			message: 'Invalid Ipv4',
			
		})
	}
},
//Add devices to gateway
update: function(req, res) {
  let gateSerial = req.params.gateSerial
  Gateways.findOne({serial: gateSerial}, function(err, gateway){
    if(err) {
      return res.status(500).json({
        message: 'There was an error saving the gateway',
        error: err
      })
    }
    if(!gateway) {
      return res.status(404).json({
        message: 'Gateway not found'
      })
    }		
		if(gateway.pdevices.length<10){			
			gateway.pdevices.push(req.body)			  
			gateway.save(function(err, gateway){
				if(err) {
					return res.status(500).json({
						message: 'There was an error saving the gateway'
					})
				}
				if(!gateway) {
					return res.status(404).json({
						message: 'Gateway not found'
					})
				}
				return res.json(gateway)
			})
		}else{
			return res.status(404).json({
				message: 'This gateway only accepts 9 devices'
			})
		}
  })

},
//Delete gateway
remove: function(req, res) {
  let gateSerial = req.params.gateSerial
  Gateways.findOneAndDelete({serial: gateSerial}, function(err, gateway){
    if(err) {
      return res.status(500).json({
        message: 'There was an error',
        error: err
      })
    }
    if(!gateway) {
      return res.status(404).json({
        message: 'Gateway not found'
      })
    }
    return res.json(gateway)
  })  
},
//Remove device from gateway
  removeDevices: function(req, res) {
    let gateSerial = req.params.gateSerial
    let deviceId = req.params.deviceID
    Gateways.findOne({serial: gateSerial}, function(err, gateway){
      if(err) {
        return res.status(500).json({
          message: 'There was an error',
          error: err
        })
      }
      if(!gateway) {
        return res.status(404).json({
          message: 'Gateway not found'
        })
      }
      if(gateway.pdevices.length>0){	
        const foundedDevice = gateway.pdevices.findIndex(pdevice => pdevice.uid.toString() ===deviceId.toString())        
          if(!foundedDevice) {
            return res.status(404).json({
              message: 'removeDevices Device not found',
              error: 'removeDevices Device not found'
            })
          }
          gateway.pdevices.splice(foundedDevice, 1) 
          gateway.save(function(err, gateway){
            if(err) {
              return res.status(500).json({
                message: 'There was an error saving the gateway'
              })
            }
            if(!gateway) {
              return res.status(404).json({
                message: 'Gateway not found'
              })
            }
            return res.json(gateway)    
          })   
        }	
        else{
          return res.status(404).json({
            message: 'This gateway has no associated devices'
           })
        }
    })  
  }
}
