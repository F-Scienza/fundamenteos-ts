(() => {
  type UserID = string | number // creamos nuestro prototipo
  let userId: UserID
  userId = 23
  userId = '22'

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`lo trata como string ${myText.toLocaleLowerCase}`)
    }
  }
  greeting('asd')
  greeting(123)


  // literal types
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'
  let shirtSize: Sizes
  shirtSize = 'L'
  shirtSize = 'M'
  shirtSize = 'XL'

})()
