const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(options) {
    this.options = options;
  }
  encrypt(message, key){
    if(message === undefined || key === undefined) new Error('Моя ошибка')
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A']
    let upperMess = message.toUpperCase();
    let upperKey = key.toUpperCase();
    let encryptedMessArr = [];
    while (upperKey.length < upperMess.length){
      upperKey+=upperKey
    }
    let upperKeyFull = upperKey.split('').map((char, index) => index < upperMess.length ? char: '').join('').trim()
    upperKeyFull = upperKeyFull.split('')

    let counterKey = 0;
    for (let i = 0; i < upperKeyFull.length; i++){
      let indexKeyChar = (alphabet.indexOf(upperKeyFull[counterKey]))
      let indexMessChar = (alphabet.indexOf(upperMess[i]))
      if(indexMessChar === -1){
        encryptedMessArr.push(upperMess[i])
      }else{
        encryptedMessArr.push(alphabet[indexKeyChar + indexMessChar <= 26 ? indexKeyChar + indexMessChar : indexKeyChar + indexMessChar - 26])
        counterKey++
      }
    }
    // console.log(encryptedMessArr.join(''))

    return this.options === false ? encryptedMessArr.reverse().join('') : encryptedMessArr.join('')
  }


  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined) new Error('Моя ошибка')
      let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A']
      alphabet = alphabet.reverse()
      let upperMess = encryptedMessage.toUpperCase();
      let upperKey = key.toUpperCase();
      let encryptedMessArr = [];
      while (upperKey.length < upperMess.length){
        upperKey+=upperKey
      }
      let upperKeyFull = upperKey.split('').map((char, index) => index < upperMess.length ? char: '').join('').trim()
      upperKeyFull = upperKeyFull.split('')

      let counterKey = 0;
      for (let i = 0; i < upperKeyFull.length; i++){
        // console.log(upperKeyFull[counterKey])
        // console.log(upperMess[i])
        let indexKeyChar = (alphabet.indexOf(upperKeyFull[counterKey]))
        let indexMessChar = (alphabet.indexOf(upperMess[i]))

        if(indexMessChar === -1){
          encryptedMessArr.push(upperMess[i])
          // }else if(upperMess[i] === 'A' && upperKeyFull[counterKey] === 'A'){
          //     encryptedMessArr.push(upperMess[i])
        }else{
          encryptedMessArr.push(alphabet[indexMessChar - indexKeyChar >= 0 ? indexMessChar - indexKeyChar : indexMessChar + 26 - indexKeyChar])

          // encryptedMessArr.push(alphabet[-indexKeyChar - indexMessChar <= -26 ? -indexKeyChar - -indexMessChar : 26 - indexKeyChar + indexMessChar])
          counterKey++
        }
      }
      // console.log(encryptedMessArr.join(''))

      return this.options === false ? encryptedMessArr.reverse().join('') : encryptedMessArr.join('')
    }
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
}

module.exports = VigenereCipheringMachine;
