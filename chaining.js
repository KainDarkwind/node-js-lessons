const users = [
   {
      name: "will",
      isActive: true,
      createdAt: 1629770678781,
      socialProfiles: [
         {
            site: "facebook",
            siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
            username: "wchurch3",
            image: {
               sm: "",
               orig: "",
            },
         },
         {
            site: "dicefreaks",
            siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
            username: "kaindarkwind",
            image: {
               sm: "",
               md: "",
               orig: "",
            },
         },
      ],
   },
   {
      name: "mike",
      isActive: true,
      createdAt: 1629770678881,
      socialProfiles: [
         {
            site: "codecamp",
            siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
            username: "mikezetlow",
            image: {
               sm: "",
               orig: "",
            },
         },
         {
            site: "twitter",
            siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
            username: "mzetlow",
            image: {
               sm: "",
               md: "",
               orig: "",
            },
         },
      ],
   },
   {
      name: "rachel",
      isActive: false,
      createdAt: 1629770678981,
      socialProfiles: [
         {
            site: "facebook",
            siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
            username: "hotbabe69",
            image: {
               sm: "",
               orig: "",
            },
         },
         {
            site: "twitter",
            siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
            username: "fiending4will",
            image: {
               sm: "",
               md: "",
               orig: "",
            },
         },
      ],
   },
];

const fbUsers = users
   .map((user) => {
      const newUser = {
         name: user.name,
         fbName: getFbNameUsingFP(user),
      };
      return newUser;
   }) //This is the end of the map, and I chain the filter method onto it directly after.  The filter method is only selecting fbusers from the result of the map.
   .filter((user) => {
      return user.fbName !== ""; //it returns users that don't have an empty string listed for their fbName.  I wrote the function GetFbNameUsingFP to produce a blank string if they didn't have a fb user name.
   });

console.log(fbUsers);

function getFbName(user) {
   let fbName = "";
   user.socialProfiles.forEach((profile) => {
      if (profile.site === "facebook") {
         fbName = profile.username;
      }
   });
   return fbName;
}

function getFbNameUsingFP(user) {
   const fbProfiles = user.socialProfiles.filter((profile) => {
      return profile.site === "facebook";
   });

   if (fbProfiles.length > 0) {
      return fbProfiles[0].username;
   }
   return ""; //I don't need an else here, the code never reaches this return if it returns on line 108 when the if fires.  And if it doesn't fire, then I'm returning the blank string.
}
