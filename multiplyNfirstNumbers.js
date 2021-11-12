function multiplyNfirstNumbers(n){
  let store = [];
  let mult = 1;
  for (let i = 2; i <= n; i += 1) {
    let n = i;
    for(let j = 0; j < store.length; j += 1) {
      if (n % store[j] === 0) {
        n=n/store[j];
      }
    }
    store.push(n);
    mult *= n;
  }
  return mult;
}

console.log(mult(10)) // 2520