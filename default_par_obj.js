function buildHouse({floors =[1], color =['red'] , walls = ['brick']} = {}){
    return `your house has ${floors} floor(s) with ${color} ${walls} walls.`
}

console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.
