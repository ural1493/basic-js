const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cat = 0;
   matrix.flat(Infinity).map(item => (item == "^^") ? cat+=1 : cat)
  return cat
};
