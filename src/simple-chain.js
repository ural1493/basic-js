const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],
  chainStr: '',

  getLength() {
    return this.chainArray.length
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value = ' ') {
    this.chainArray.push(`( ${value} )`)
    return this
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(Number.isInteger(position)===true && position>0 && typeof position==='number'){

      this.chainArray.splice(position - 1, 1)
      return this
    }else{
      this.chainStr = '';
      this.chainArray = [];
      throw new Error('position should be positive integer number')
    }
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chainArray.reverse()
    return this
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    this.chainStr = this.chainArray.join('~~');
    this.chainArray = [];
    return this.chainStr
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
