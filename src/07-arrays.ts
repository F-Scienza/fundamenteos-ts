(() => {
  let prices = [1, 2, 3, 4, 5, 6, 7]
  // lo infiere como array de numeros
  // prices.push('ads')
  // prices.push(true)
  // prices.push({})
  prices.push(1232132)
  let alltypes = [1, 2, 'asd', true]
  // lo infiere como array de cualquier tipo
  let products = ['hola', true]
  // lo infiere como solo string y boolean
  // products.push(123)

  const mixed: (string | number | boolean | object)[] = []
  mixed.push(123)
  mixed.push('asd')
  mixed.push(true)
  mixed.push({})
  // si agregamos object al tipo puede ingresar cualquier tipo
  // no se recomienda, porque puede haber errores

  let numbersss= [1,2,3,4,6,7,8]
  numbersss.map(item=>item*2)

  let numbers2 = [1,2,3,'asd']
  // numbers2.map(item=>item*2)
  // nos advierte porque hay un string en el array

})()
