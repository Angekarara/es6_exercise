const book1 = {title: 'rich', plublished: 2020}
const book2 = {title: 'poverty', plublished: 2018} 
const book3 = {title: 'famine', plublished: 2015}

const book = new WeakMap()

book.set(book1, true)
book.set(book2, false)
book.set(book3, true)

console.log(book)