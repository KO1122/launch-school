let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

let newMunsters = JSON.parse(JSON.stringify(munsters));
newMunsters.herman = null;
console.log(munsters);
console.log(newMunsters);
