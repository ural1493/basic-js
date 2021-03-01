const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!';
  if(!date instanceof Date || date == null) return new Error()
  if (date.getMonth !== Date.prototype.getMonth) throw new Error()
  let month = date.getMonth()
  // console.log(month)
  if(month === 0 || month === 1 || month === 11) return 'winter';
  if(month === 2 || month === 3 || month === 4) return 'spring';
  if(month === 5 || month === 6 || month === 7) return 'summer';
  if(month === 8 || month === 9 || month === 10) return 'autumn';


  // switch (month){
  //     case (11 || 0 || 1) :
  //         return 'winter'
  //         break;
  //     case (2 || 3 || 4) :
  //         return 'spring'
  //         break;
  //     case (5 || 6 || 7) :
  //         return 'summer'
  //         break;
  //
  //     case (8 || 9 || 10) :
  //         return 'autumn'
  //         break;
  // }
};
