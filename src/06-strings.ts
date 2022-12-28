(() => {
  let productTitle = 'my amazing product' // infiere string
  //productTitle=123
  //productTitle=null
  //productTitle= false
  console.log('titulo de producto: ', productTitle)

  const productDescription = "i'm facundo"
  // si usamos comilla simple en este caso se nos cierra el string
  console.log ('product description: ', productDescription)
  let prodctPrice:number= 100
  let isNew:boolean = true
  const sumary = `
  titulo: ${productTitle}
  descripcion: ${productDescription}
  precio: ${prodctPrice}
  nuevo: ${isNew}
  `
  console.log(sumary)

  let nombre: string = 'facundo'

})()
