import { Prodct } from './product.model'

export const prodcts: Prodct[] = []

export const addProd = (data: Prodct) => {
  prodcts.push(data)
}

export const calcStock = (): number => {
  let total:number = 0
  prodcts.forEach((item) => total += item.stock)
  console.log(total)
  return total
}
