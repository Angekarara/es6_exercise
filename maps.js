const employees = new Map()
employees.set('kevine' ,{
    age:22,
    sex: 'female'
})

employees.set('ange', {
    age: 23,
    sex:'male'
})
const add = employees.has('ange')

console.log(employees)

console.log(employees.get('kevine'))

for (let employee of employees){
    console.log(employee)
}
