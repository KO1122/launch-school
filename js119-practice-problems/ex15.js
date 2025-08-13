const p = console.log;

function greatestProduct(str) {
  let mxProd = 0;
  let prod = 1;
  let l = 0;
  for (let r = 0; r < str.length; r++) {
    prod *= Number(str[r]);
    if (r - l + 1 === 4) {
      mxProd = Math.max(mxProd, prod);
      prod /= Number(str[l]);
      l++;
    }
  }
  return mxProd;
}

p(greatestProduct("23456") === 360); // 3 * 4 * 5 * 6
p(greatestProduct("3145926") === 540); // 5 * 9 * 2 * 6
p(greatestProduct("1828172") === 128); // 1 * 8 * 2 * 8
p(greatestProduct("123987654") === 3024); // 9 * 8 * 7 * 6
