(() => {
  const login = (data: { email: string, password: string }) => {
    console.log(data.email, data.password)
  }
  login({
    email: 'cufa@gmail.com',
    password: '123232'
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  let prodcts: any[] = []

  const addProd = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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
    size:'XL'
  })
  console.log(prodcts)
})()
