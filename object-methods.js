const memoryCard = {
   answer: "A fun time for a pervert",
   createdAt: 100010050090,
   id: "wooshy-booshy-figgle-tooshy",
   imagery: "two pigs in a barrel",
   lastAttemptAt: 100030040090,
   level: 1,
   nextAttemptAt: 100030050090,
   totalSuccessfulAttempts: 1,
   userId: "123-baby-with-me",
};

const keys = Object.keys(memoryCard);
console.log(keys);

const values = Object.values(memoryCard);
console.log(values);

const hasAnswerProp = memoryCard.hasOwnProperty(`answer`);
console.log(hasAnswerProp);
const hasFirstNameProp = memoryCard.hasOwnProperty(`firstName`);
console.log(hasFirstNameProp);
