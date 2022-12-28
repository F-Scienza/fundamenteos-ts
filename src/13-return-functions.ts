(()=>{
  const calcTotal = (prices: number[]):number =>{
    let total = 0
    prices.forEach((item) =>{
      total += item
    })
    return total
  }

  const rta = calcTotal([1,2,3,4,5])
  console.log(rta)


  const printTotal = (prices:number[]):void =>{
    const rta = calcTotal(prices)
    console.log(`el total es ${rta}`)
  }
  printTotal([1,2,3,4,5])
})()
