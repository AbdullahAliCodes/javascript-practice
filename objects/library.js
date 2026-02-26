
// Create an object and print the output according to the test case given below.
const myLibrary = createLibrary();

function createLibrary() {
    const books = [
        {title: "Book 1", author: "Author 1", isAvailable: true},
        {title: "Book 2", author: "Author 2", isAvailable: true},
        {title: "Book 3", author: "Author 3", isAvailable: false},
    ]
    return {
        addBook(book){
            book.isAvailable = true
            books.push(book)
            return `Succesfully added "${book.title}" book.`
        },
        checkoutBook(title){
            const foundBook = books.find(book => book.title === title);
            if (foundBook && foundBook.isAvailable === true) {
                foundBook.isAvailable = false // will this edit the actual array ?
                return `${title} has been checked out.`, books
            }
            else {
                return `${title} is not available for checkout.`
            }
        },
        returnBook(title) {
            const foundBook = books.find(book => book.title === title);
            if (foundBook && foundBook.isAvailable === false) {
                foundBook.isAvailable = true // will this edit the actual array ?
                return `${title} has been returned.`
            }
            else {
                return `${title} is not checked out.`
            }
        }
    }
}

// Output
console.log(myLibrary.checkoutBook("Book 1")); // Should log "Book 1 has been checked out."
console.log(myLibrary.checkoutBook("Book 3")); // Should log "Book 3 is not available for checkout."
console.log(myLibrary.returnBook("Book 1"));  // Should log "Book 1 has been returned."
console.log(myLibrary.returnBook("Book 2"));  // Should log "Book 2 is not checked out."
console.log(myLibrary.checkoutBook("Book 2")); // Should log "Book 2 has been checked out."
