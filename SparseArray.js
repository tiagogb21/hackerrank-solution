function findValue(array,value1){
  return array.filter(valueStrings=>valueStrings===value1);
}

function matchingStrings(strings, queries) {
  return queries.map(valueQueries=>findValue(strings,valueQueries).length)
}