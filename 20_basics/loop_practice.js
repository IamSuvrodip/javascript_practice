const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publication_year: 1925,
    author: "F. Scott Fitzgerald",
    publisher: "Scribner",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publication_year: 1960,
    author: "Harper Lee",
    publisher: "J. B. Lippincott & Co.",
  },
  {
    title: "1984",
    genre: "Science Fiction",
    publication_year: 1949,
    author: "George Orwell",
    publisher: "Secker & Warburg",
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publication_year: 1813,
    author: "Jane Austen",
    publisher: "T. Egerton, Whitehall",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publication_year: 1951,
    author: "J. D. Salinger",
    publisher: "Little, Brown and Company",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    publication_year: 1997,
    author: "J. K. Rowling",
    publisher: "Bloomsbury",
  },
  {
    title: "The Da Vinci Code",
    genre: "Mystery",
    publication_year: 2003,
    author: "Dan Brown",
    publisher: "Doubleday",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publication_year: 1937,
    author: "J. R. R. Tolkien",
    publisher: "George Allen & Unwin",
  },
  {
    title: "The Diary of a Young Girl",
    genre: "Biography",
    publication_year: 1947,
    author: "Anne Frank",
    publisher: "Contact Publishing",
  },
  {
    title: "Think and Grow Rich",
    genre: "Self-help",
    publication_year: 1937,
    author: "Napoleon Hill",
    publisher: "The Ralston Society",
  },
];
const userBooks = books.filter((bk) => {
  return bk.publication_year === 1937;
});

console.log(userBooks);
console.log("\n");
/*
[
  {
    title: 'The Hobbit',
    genre: 'Fantasy',
    publication_year: 1937,
    author: 'J. R. R. Tolkien',
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'Think and Grow Rich',
    genre: 'Self-help',
    publication_year: 1937,
    author: 'Napoleon Hill',
    publisher: 'The Ralston Society'
  }
]

*/
