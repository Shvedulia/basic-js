const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  }
  let mas = []
  for(let i = 0; i <arr.length; i++){
    if(arr[i] === '--discard-prev' && i !== 0){
      mas.splice(-1, 1)
    } else if(arr[i] === '--double-prev' && i !== 0 ){
      mas.push(mas[i - 1])
    } else if(arr[i] === '--double-next' && i !== arr[arr.length - 1]){
      mas.push(arr[i + 1])
    } else if(arr[i] === '--discard-next' && i !== arr[arr.length - 1]){
      mas.push(arr[i])
      i++
    } else {
      mas.push(arr[i])
    }
  }
  return mas.filter(item => item !== '--discard-prev' && item !== '--double-prev' && item !== '--double-next' && item !== '--discard-next' && item !== undefined)
}

module.exports = {
  transform
};
