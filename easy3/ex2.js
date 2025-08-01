// Bannerizer
// Write a function that will take a short line of text, and write it to the console log within a box.

function logInBox(text) {
  let length = text.length;
  console.log(`+${"-".repeat(length + 2)}+`);
  console.log(`| ${" ".repeat(length)} |`);
  console.log(`| ${text} |`);
  console.log(`| ${" ".repeat(length)} |`);
  console.log(`+${"-".repeat(length + 2)}+`);
}

logInBox("To boldly go where no one has gone before.");
logInBox("");
