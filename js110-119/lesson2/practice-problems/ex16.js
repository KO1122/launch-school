let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

let res = Object.values(obj).map((obj) => {
  if (obj.type === "fruit") {
    return obj.colors.map(capitalize);
  } else {
    return obj.size.toUpperCase();
  }
});
console.log(res);
