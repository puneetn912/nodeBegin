    
// cbf
let passingOutCb = () => {
    console.log('passing out')
    console.log('passed out successfully')
}
let drinking = (brand, cb) => {
  console.log('drinking', brand)
  passingOutCb()
}

drinking( 'smirnoff', passingOutCb )   


