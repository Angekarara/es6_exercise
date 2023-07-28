/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 making the first characters uppercase*
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for(let day of days){
    let dayy = day.charAt(0).toUpperCase()
    console.log(`${dayy}${day.slice(1)}`)
}