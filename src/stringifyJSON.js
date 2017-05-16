// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // strings - spit out a string in quotation marks
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  
  if (Array.isArray(obj)) {
    let result = obj.map(function(ele) {
      return stringifyJSON(ele);
    });
    return '[' + result + ']';
  }

  // for objects
  if (obj && typeof(obj) === 'object') {
    let result = [];

    for (let key in obj) {
      let elem = obj[key];

      if (elem === undefined || typeof elem === 'function') {
        continue;
      } 
      result.push(stringifyJSON(key) + ':' + stringifyJSON(elem));
    }
    return '{' + result + '}';
  }

  return '' + obj;
      
};