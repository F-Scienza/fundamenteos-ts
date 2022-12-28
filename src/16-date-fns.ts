import { subDays, format } from 'date-fns'

const date = new Date(1995, 1, 14) // 14 de febrero
const rta = subDays(date, 30) // puedo usar string
const str = format(rta, 'yyyy/MM/dd')

console.log(str)

