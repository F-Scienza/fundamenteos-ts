(() => {
  // let myNumber: number = undefined

  let myNull: null = null
  // Hay librerias que cuando inicializan objetos empiezan como null
  let myUndefined: undefined = undefined

  let myNumber: undefined | number = undefined
  myNumber = 213
  let myString: null | string = null
  myString = 'hola rey'

  function h1(name: string | null) {
    let hello = 'hello'
    if (name) {
      console.log(`${hello} ${name}`)
    } else {
      console.log(`${hello} nobody`)
    }
  }
  h1('rey')
  h1(null)

  function h1v2(name: null | string) {
    let hello = 'Hola '
    hello += name?.toLocaleLowerCase || 'nobody'
    console.log(hello)
  }
  h1v2('hola')
  h1v2(null)
})()
