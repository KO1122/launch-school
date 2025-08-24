// Name Swapping

function swapName(str) {
  let [firstName, lastName] = str.split(" ");
  return `${lastName}, ${firstName}`;
}

console.log(swapName("Joe Roberts")); // "Roberts, Joe"
