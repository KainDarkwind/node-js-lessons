const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
   socialProfiles: [
      {
         site: "facebook",
         username: "mikez",
         id: "006007",
         profilePic: "",
         image: {
            small: "small.jpg",
            medium: "medium.jpg",
            large: "large.jpg",
         },
         age: "23",
         createdAt: 2010,
      },
      {
         site: "twitter",
         username: "mikesetlow",
         id: "a4b89434ef",
         thumbnail: "",
      },
   ],
};

const indexOfFacebook = 0;

const newUser = deepCopy(user);
// newUser = JSON.parse(JSON.stringify(user)); //deep copy, loses previous references
if (newUser !== undefined) {
   newUser.socialProfiles[indexOfFacebook].image.large = "large2.jpg";
}

delete newUser.socialProfiles[indexOfFacebook].image.small;
console.log(user.socialProfiles);
console.log(newUser.socialProfiles);

// const userAsJson = JSON.stringify(user); //turns js to JSON
// const userAsObj = JSON.parse(userAsJson); //turns JSON to js
// console.log(userAsObj);

function deepCopy(obj) {
   const str = JSON.stringify(obj);

   return safelyParseJson(str);
}

function safelyParseJson(str) {
   try {
      JSON.parse(str);
   } catch {
      return str;
   }
   return JSON.parse(str);
}

function getEmail() {
   //get the user's email from the input with jQuery

   return "kain@gmail.com";
}

function getPassword() {
   //get the user's password from the input with jQuery

   return "cockandcucksfordays";
}

function getCreatedAt() {
   //generate createdAt number
   return 20210407;
}

function getId() {
   // generate id string
   return "023048";
}
