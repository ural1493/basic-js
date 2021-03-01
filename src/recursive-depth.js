const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for(let i = 0; i < arr.length; i++){
      // console.log('это i', i,'это элемент',arr[i], 'это глубина',depth)
      if(Array.isArray(arr[i])) {
        // console.log('это i', i,'это элемент',arr[i], 'это глубина',depth)
        arr = arr.flat(1)
        return depth + this.calculateDepth(arr)
      }
    }
    return depth
  }
};