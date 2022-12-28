(() => {
  let myDynamicVar: any
  // any puede ser cualquier cosa, lo podemos modificar como querramos
  // sin recibir advertencias, le quitamos el analisis de tipo

  myDynamicVar = 123
  myDynamicVar = 'hola'
  myDynamicVar = {}

  // se aconseja no utilizar el any
  // se aconseja cuando se esta migrando para que sea menos brusco la migracion a ts

  myDynamicVar = 'hola'
  // myDynamicVar. si ponemos el punto no nos sugiere nada, porque desconoce el tipo
  const rta = (myDynamicVar as string).toLocaleLowerCase()// a esto le llaman _cast_
  //obligamos a que lo trate como un string
  console.log(rta)

  myDynamicVar=123
  const rta2 = (<number>myDynamicVar) // a esto le llaman _cast_

})()
