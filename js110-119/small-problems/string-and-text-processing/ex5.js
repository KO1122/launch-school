// Swap Case

function swap(char) {
  if (char >= "a" && char <= "z") {
    return char.toUpperCase();
  } else if (char >= "A" && char <= "Z") {
    return char.toLowerCase();
  } else {
    return char;
  }
}

function swapCase(str) {
  return str
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char) => swap(char))
        .join("")
    )
    .join(" ");
}

console.log(swapCase("CamelCase"));
console.log(swapCase("Tonight on XYZ-TV"));
