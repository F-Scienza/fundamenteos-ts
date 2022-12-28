(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type Prodct = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }


  let prodcts: Prodct[] = []

  const addProd = (data: Prodct) => {
    prodcts.push(data)
  }

  addProd({
    title: 'producto1',
    createdAt: new Date(1986, 1, 1),
    stock: 2,
  })
  addProd({
    title: 'producto1',
    createdAt: new Date(2022, 12, 18),
    stock: 3,
    size: 'XL'
  })
  console.log(prodcts)
})()
