const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
let res = str.split('')
let mas = []
let sum = 1;
for(let i = 0; i < res.length; i++){
  if(res[i] === res[i + 1]){
    sum += 1
  } else{
    const count = sum === 1 ? res[i] : `${sum}${res[i]}`
    mas.push(count)
    sum = 1
  }
}
return mas.join('')
}

module.exports = {
  encodeLine
};
