const girl = {
    name: 'anna',
    age: 12,
    subject: 'math'

}
const boy = {
    name: 'yves',
    age: '23'
}

const girlsKeys = Object.keys(girl) ;
const boysKeys = Object.keys(boy);
let result = girlsKeys.every((key) => boysKeys.includes(key) )
console.log(result)
