(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const createProductToJson = (
    title:string,
    createdAt : Date,
    stock: number,
    size?: Sizes // variable opcional
  ) => {
    return{
      title, createdAt, stock, size
    }
  }

  const producto1 = createProductToJson('P1', new Date(), 12,'XL')
  console.log(producto1)
  console.log(producto1.title)
  console.log(producto1.stock)
})
