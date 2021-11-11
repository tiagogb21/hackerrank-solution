function timeConversion(s) {
  let verifyAMPM = s.substring(s.length-2);
  let hour = s.substring(0,2);
  if(hour === '12' && verifyAMPM==='AM'){
    let newTime = '00' + s.substring(2,s.length-2);
    return newTime;  
  }
  if(hour !== '12' && verifyAMPM==='PM'){
    let newHour = parseInt(hour)+12;
    let newTime = newHour + s.substring(2,s.length-2);
    return newTime;
  }
  return s.substring(0,s.length-2);
}