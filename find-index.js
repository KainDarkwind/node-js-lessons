const authors = [
   {
      name: "Stephen King",
      books: [
         { title: "The Shining" },
         { title: "The Stand" },
         { title: "The Green Mile" },
         { title: "Apt Pupil" },
      ],
   },
   {
      name: "Philip Roth",
      books: [{ title: "American Pastoral" }],
   },
   {
      name: "Franz Kafka",
      books: [{ title: "The Hunger Artist" }, { title: "Metamorphosis" }],
   },
   {
      name: "J R R Tolkein",
      books: [
         { title: "The Hobbit" },
         { title: "The Fellowship of the Ring" },
         { title: "The Two Towers" },
         { title: "The Return of the King" },
      ],
   },
   {
      name: "Franz Kafka",
      books: [{ title: "The Castle" }, { title: "Letters to Felice" }],
   },
   {
      name: "Philip Roth",
      books: [{ title: "Sabbath's Theater" }],
   },
];

let mostBooks = 0;

authors.forEach((author) => {
   if (author.books.length > mostBooks) {
      mostBooks = author.books.length;
   }
});

console.log("The most books is", mostBooks);

const authorWithMostBooks = authors.find((author) => {
   return author.books.length === mostBooks;
});

console.log("author with most books is", authorWithMostBooks);

const query = "philip roth";

const author = authors.find((author) => {
   return author.name.toLowerCase() === query.toLowerCase();
});

console.log(author);

// const dupAuthor = authors
//    .map((author) => {
//       return JSON.stringify(author);
//    })
//    .find((author, i, arr) => {
//       return arr.indexOf(author) !== i;
//    });

// console.log(dupAuthor);
//The above isn't working for some reason.

const dupAuthor = authors
   .map((author) => {
      return author.name;
   })
   .find((name, i, arr) => {
      return arr.indexOf(name) !== i;
   });
console.log("The first duplicated author is", dupAuthor);
//this finds the first duplicated author.

const dupAuthorIndex = authors
   .map((author) => {
      return author.name;
   })
   .findIndex((name, i, arr) => {
      return arr.indexOf(name) !== i;
   });
console.log("the duplicated author index is", dupAuthorIndex);
//This finds the index of the first duplicated author.  Important if you need to remove objects from an array.

const uniqAuthors = authors.filter((author) => {
   console.log("the author at the dup index is", authors[dupAuthorIndex]);
   console.log(
      "The name of the author at the dup index is",
      authors[dupAuthorIndex].name
   );
   // console.log("The dup author is", dupAuthor);
   console.log("This indexof thing is", authors.indexOf(author));

   return authors.indexOf(author) != dupAuthorIndex;
});

console.log("the unique authors are", uniqAuthors);
