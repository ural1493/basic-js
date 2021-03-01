const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if(options.repeatTimes == undefined) options.repeatTimes = 1;
    if(options.addition === null) options.addition = 'null';
    if(options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
    if(options.separator == undefined) options.separator = '+'
    if(options.addition == undefined) options.addition = ''
    if(options.additionSeparator == undefined) options.additionSeparator = '|'

    let arrStr = [];
    let arrAdd = [];
    for (let i = 1; i <= options.additionRepeatTimes; i++){
        arrAdd.push(options.addition)
    }
    for (let i = 1; i <= options.repeatTimes; i++){
        arrStr.push(str+arrAdd.join(options.additionSeparator))
    }
    // console.log(arrStr,arrAdd)
    // console.log(arrAdd.join(options.additionSeparator))
    return arrStr.join(`${options.separator}`)
};