function shippingLabel(name = 'Richard', address ='Mountain View'){
    return `To: ${name}   In: ${address}`
}
console.log(shippingLabel());
console.log(shippingLabel('james'))
console.log(shippingLabel('Kevine', 'Gisozi'))