function separate(arr,start,end){
  return arr.slice(start,end)
}
function miniMaxSum(arr) {
  arr = arr.sort((a,b)=>a-b)
  let minimum = separate(arr, 0, arr.length-1).reduce((a,b)=>a+b);
  let maximum = separate(arr, 1, arr.length).reduce((a,b)=>a+b);
  console.log(minimum ,maximum);
}
console.log(miniMaxSum([11,22,3,41,5]))