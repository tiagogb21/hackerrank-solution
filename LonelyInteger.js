function lonelyinteger(a) {
  a = a.sort();
  let obj = {};
  for(let i = 0; i<a.length; i+=1){
    if(obj[a[i]]===undefined){
      obj[a[i]] = 1;
    } else if(obj[a[i]]!==undefined) {
      obj[a[i]] += 1;
    }
  }
  console.log(obj)
  for(let i in obj){
    console.log(obj[i])
    if(obj[i]===1){
      return i;
    }
  }
}