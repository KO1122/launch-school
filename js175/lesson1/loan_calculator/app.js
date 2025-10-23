const HTTP = require("http");
const URL = require("url").URL;
const PORT = 3000;

function getParams(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.searchParams;
}

function calculateMonthlyPayment(amount, years) {
  let interestRate = 5;
  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(years) * 12;

  let monthlyPayment =
    Number(amount) *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -Number(months))));

  return monthlyPayment;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === "/favicon.ico") {
    res.statusCode = 404;
    res.end();
  } else {
    let params = getParams(path);
    let amount = params.get("amount");
    let years = params.get("duration");
    let monthlyPayment = calculateMonthlyPayment(amount, years);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    res.write(`Amount: $${amount}\n`);
    res.write(`Duration: ${years} years\n`);
    res.write(`APR: 5%\n`);
    res.write(`Monthly payment: $${monthlyPayment.toFixed(2)}\n`);

    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
