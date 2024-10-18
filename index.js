const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((book) => console.log(book.authorFirst + " " + book.authorLast, "wrote " + book.name + " in " + book.publishDate))

//Sort books from oldest to most recent
/* const oldNew = [];
const bookdates = books.forEach((book) => oldNew.push(book.publishDate));
oldNew.sort(); */

/* const oldNew= books.sort(function(book1, book2){
  return book1.publishDate - book2.publishDate
});
oldNew.forEach((book)=>console.log(book.name,book.publishDate)) 
 */

const oldNew = books.sort((book1, book2) => book1.publishDate - book2.publishDate); //sorts books based on publish date
oldNew.forEach((book)=>console.log(book.name,book.publishDate)) //for each book, console.log the book name and publish date


//sort books alphabetically
/* console.log(books.sort(function(title1, title2){
  return title1.name - title2.name;
})); */

console.log(titles.sort());

//Find who wrote War and Peace
const warAndPeace = books.filter((book)=> book.name === "War and Peace");
warAndPeace.forEach((names) => console.log(names.authorFirst + " " + names.authorLast + " wrote War and Peace."));



//how many books were written before 1900?
const before1900 = books.filter((book)=> book.publishDate <= 1900);
console.log(before1900.length); 
 

//was there at least one book published within the last 100 years?
function last100 (){

  const after1923 = books.filter((book)=> book.publishDate >= 1923); //filters out books published after 1923
  //book.publishDate grabs every publishDate of everything
  //>= 1923 filters out every publishDate that is less than 1923

  if (after1923.indexOf(0)){ //if the index of the array has at least an index of zero (something is in the array)
    console.log("yes"); //then print yes, there was at least one book published within the last 100 years
  } else { //otherwise
    console.log("no (it's not working losaaaa"); //print no, there was not at least one book published within the last 100 years
  }
}

last100();//calls the function to activate it


//was every book published within the last 100 years?
function waslast100 (){

  const after1923 = books.filter((book)=> book.publishDate >= 1923); 
  
 if (after1923.length < 10){ 
    console.log("no");
  } else {
    console.log("yes (it's not working losaaaa");
  }
}
 
waslast100();


//print a list of books that "includes" the genre historical
/* const historical = books.filter((book)=> book.genre == "historical");
console.log(historical) //fix this tmrw, prints only an empty array  */
//use include i hink

const historical = books.filter((book) => book.genre.includes("historical"))
console.log(historical);

