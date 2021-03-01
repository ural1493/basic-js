const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
      return members
          .filter(value => (typeof (value) === 'string'))
          // .flat()
          .map(value => value.trim()[0])
          // .sort()
          .join('')
          .toUpperCase()
          .split('')
          .sort()
          .join('')
    }
    return false
};

