
export type Sizes = 'S' | 'M' | 'L' | 'XL'
export type Prodct = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}
