//Sort the Array of Numbers

const numbers = [5, 10, 15, 20, 25, 30, 35, 40];

const numbersSorted = numbers.sort((a, b) => a - b)

console.log(numbersSorted);



//sort the array of books by name 
const books = [
    { name: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { name: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { name: '1984', author: 'George Orwell' },
    { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { name: 'Pride and Prejudice', author: 'Jane Austen' },
    // Add more books as needed
  ];
  


   books.sort((book1,book2) => {
    const out = book1.author.split("")[1]
    const out2 = book2.author.split("")[1]
    return out < out2 ? -1 : 1 

   })

   console.log(books)