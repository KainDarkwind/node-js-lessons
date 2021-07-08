const userProps = ["kain@gmail.com", "cocksfordays", 20200107, "023048"];

const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
};

console.log(user.email);

function getEmail() {
   //get the user's email from the input with jQuery

   return "kain@gmail.com";
}

function getPassword() {
   //get the user's password from the input with jQuery

   return "cocksfordays";
}

function getCreatedAt() {
   //generate createdAt number
   return 20210407;
}

function getId() {
   // generate id string
   return "023048";
}

const newUser = { ...user }; //shallow copy via spread
newUser.isActive = true;
newUser.tokenExpiredAt = 90;
console.log(newUser);


