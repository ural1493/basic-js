const CustomError = require("../extensions/custom-error");



module.exports = function transform(arr) {

  if(Array.isArray(arr) === false) {
    throw new Error();
  }

  const result = [];

  for(let i = 0; i < arr.length; i += 1) {
      switch(arr[i]) {
        case "--double-next":
          if(i < arr.length - 1) {
            result.push(arr[i + 1]);
          }
          break;
        case "--double-prev":
          if(i > 0) {
            result.push(result[result.length - 1]);
          }
          break;
        case "--discard-next":
          if(i < arr.length) {
            result.push(undefined);
            i += 1;
          }
          break;
        case "--discard-prev":
          if(i > 0) {
            result.pop();
          }
          break;

        default:
          result.push(arr[i])
              break;
      }
  }
  const newResult = result.filter(value => value !== undefined);
  return newResult;
};





