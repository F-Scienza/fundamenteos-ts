(() => {
  let productPrice = 100
  productPrice = 12
  console.log('product price ', productPrice)
  let customerAge: number = 27
  // customerAge = customerAge + '1' // 271
  customerAge = customerAge + 1 // 28

  console.log('cusomer age ', customerAge)

  let productInStock: number = 10
  console.log('productos en stock: ', productInStock)
  // advierte que no esta inicializada de la forma correcta
  if (productInStock > 10) { // aca tambien nos advierte
    console.log(' si hay mas que 10 ')
  }
  let discount = parseInt('300')
  //let discount = parseInt('asddsg')
  //cuando le pasamos string dentro de las comillas devuelve un NaN
  if(discount <= 200){
    console.log('apply')
  }else(
    console.log('no apply')
  )

  let hex = 0xfff // hexadecimal
  console.log('hex ', hex )
  let bin = 0b101001 // binario
  console.log('bin ', bin) // traduce a decimal

  const myNumber: number = 10 // no utilizar el tipo Number con MAYUSCULA

})()
