(()=>{
  let userId:string|number
  userId=23
  userId='22'

  function greeting(myText:string|number){
    if(typeof myText === 'string'){
      console.log(`como está dentro del scope de true, lo trata como string ${myText.toLocaleLowerCase}`)
    }else {
      console.log(`como está dentro de false, lo trata como number ${myText.toFixed}`)
    }
  }
  greeting('asd')
  greeting(123)
})
