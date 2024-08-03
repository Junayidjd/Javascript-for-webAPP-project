// Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.



function capitalizedName(name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}


let book = [
    { title: "Book1", author: "junaid siddiqui", year: 2009 },
    { title: "Book2", author: "musab siddiqui", year: 2008 },
    { title: "Book3", author: "sariya siddiqui", year: 2011 },
    { title: "Book4", author: "ajmerun siddiqui", year: 2012 },
    { title: "Book5", author: "Imran siddiqui", year: 2013 },
]

function FilteringAndCapitalizing(book) {
    return book
    .filter(book => book.year > 2010)
    .map(book => ({
        title: book.title,
        author: capitalizedName(book.author),
        year: book.year,
    }))
}

const filteredBooks = FilteringAndCapitalizing(book)
console.log(filteredBooks);