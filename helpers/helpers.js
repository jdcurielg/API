module.exports = {
 
  validateIp(str) {
    let verdad = str.split('.').map(n => +n).filter(n => {
        return (n >= 0 && n < 256 && Number)
    })
    return verdad.length == 4 ? true : false
  }

}
