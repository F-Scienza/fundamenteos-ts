import { addProd, calcStock, prodcts} from './products/product.service'

addProd({
  title: 'Molde reloj',
  createdAt: new Date ( 2022, 12, 20),
  stock: 5
})
addProd({
  title: 'Molde posavasos',
  createdAt: new Date ( 2022, 12, 20),
  stock: 10
})
console.log(prodcts)
const total = calcStock()
console.log(total)
