const games = new Set([1,2,3,4]) 
console.log(games.add(8))
console.log(games.delete(3))
console.log(games.size)
console.log(games.values())
//looping throug sets using for..of
for(let game of games){
console.log(game)
}
//looping through sets using the way of object iterator
const valy = games.values();
console.log(valy.next())
console.log(valy.next())
console.log(valy.next())
console.log(valy.next())
console.log(valy.next())