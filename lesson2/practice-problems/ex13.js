const truthiness = {
  falsy: [null, undefined, "", false, NaN, 0],
  truthy: ["everything else..."],
};

let newObj = {};
for (let [key, val] of Object.entries(truthiness)) {
  newObj[key] = val.slice();
}

console.log(truthiness);
console.log(newObj);
