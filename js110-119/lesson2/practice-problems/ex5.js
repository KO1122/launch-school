let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

let res = Object.values(munsters).reduce((acc, obj) => {
  if (obj.gender === "male") {
    return acc + obj.age;
  }
  return acc;
}, 0);

console.log(res);
