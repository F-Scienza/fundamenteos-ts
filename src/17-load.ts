import _ from 'lodash';
// implementamos la librerira lodash que no tiene soporte en ts
// pero ejecutamos en la terminal el comando que nos sugiere @types
const data = [
  {
    username: 'cande',
    role: 'admin'
  },
  {
    username: 'roxana',
    role: 'mother'
  },
  {
    username: 'cufa',
    role: 'brother'
  },
  {
    username: 'fede',
    role: 'brother'
  }
]

const rta = _.groupBy(data, item => item.role)
console.log(rta)
