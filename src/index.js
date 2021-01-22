module.exports = reverse

function reverse(n) {
  if(n < 0) n *= -1
  let strFromInt = n.toString()
  let reversedStr = strFromInt.split('').reverse()
  while(reversedStr[0] == '0'){
    reversedStr.shift()
  }
  reversedStr = reversedStr.join('')
  return +reversedStr
}
