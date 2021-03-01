const CustomError = require("../extensions/custom-error");



module.exports = function transform(arr) {
  const rule = {
    "--double-next": 1,
    "--double-prev": 2,
    "--discard-next": 3,
    "--discard-prev": 4
  };
  if(Array.isArray(arr) === false) {
    throw new Error();
  }

  const result = [];

  for(let i = 0; i < arr.length; i += 1) {
    if(rule[arr[i]]) {
      switch(rule[arr[i]]) {
        case 1:
          if(i < arr.length - 1) {
            result.push(arr[i + 1]);
          }
          break;
        case 2:
          if(i > 0) {
            result.push(result[result.length - 1]);
          }
          break;
        case 3:
          if(i < arr.length) {
            result.push(undefined);
            i += 1;
          }
          break;
        case 4:
          if(i > 0) {
            result.pop();
          }
          break;
      }
    } else {
      result.push(arr[i]);
    }
  }
  const res = result.filter(function(x) {
    return x !== undefined;
  });
  return res;
};














// module.exports = function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error("Error");
//   }
//
//   // throw new CustomError('Not implemented');
//   const newArr = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//     if (arr[i] == "--discard-next") {
//       newArr.pop();
//     }
//
//     if (arr[i - 1] == "--discard-next" && arr[i + 1] != "--discard-prev") {
//       newArr.pop();
//     } else if (
//         arr[i - 1] == "--discard-next" &&
//         arr[i + 1] == "--discard-prev"
//     ) {
//       newArr.splice(newArr.length - 1, 1, "***");
//     }
//
//     if (arr[i] == "--discard-prev") {
//       newArr.pop();
//       if (
//           arr[i - 1] ||
//           typeof arr[i - 1] == "boolean" ||
//           typeof arr[i - 1] == "number"
//       ) {
//         newArr.splice(newArr.length - 1, 1);
//       }
//     }
//
//     if (arr[i] == "--double-next") {
//       newArr.pop();
//       if (
//           arr[i + 1] ||
//           typeof arr[i + 1] == "boolean" ||
//           typeof arr[i + 1] == "number"
//       ) {
//         newArr.push(arr[i + 1]);
//       }
//     }
//     if (arr[i] == "--double-prev") {
//       newArr.pop();
//       if (
//           (arr[i - 1] ||
//               typeof arr[i - 1] == "boolean" ||
//               typeof arr[i - 1] == "number") &&
//           arr[i - 2] != "--discard-next"
//       ) {
//         newArr.push(arr[i - 1]);
//       }
//     }
//   }
//
//   return newArr;
// };





//   if(Array.isArray(arr) === false) {throw new Error()};
//   if(arr.length === 0){return arr}
//   let newArr = [];
//   function isCommand(elem){
//     return ['--discard-next', '--discard-prev', '--double-next', '--double-prev'].includes(elem)
//   }
//   for(let i = 0; i < arr.length; i++){
//     switch (arr[i]){
//       case '--discard-next':
//         newArr.push('--discard-next')
//         i++
//         break;
//       case '--discard-prev':
//         newArr.pop()
//         break;
//       case '--double-next':
//         if (i == arr.length - 1) break;
//         newArr.push(arr[i + 1]);
//         break;
//       case '--double-prev':
//         if(i != 0) {newArr.push(arr[i - 1])};
//         break;
//
//       default:
//         newArr.push(arr[i])
//         break;
//     }
//   }
//   return newArr.filter(el => !isCommand(el));
// };




