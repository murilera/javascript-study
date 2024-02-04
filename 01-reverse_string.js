const isString = (value) => {
  if (!value || typeof value !== 'string') return false
  return true
}

const reverse_method = (value) => {
  if (!isString(value)) return null
  return value.split("").reverse().join("")
}


const reverse_iter = (value) => {
  if (!isString(value)) return null
  let reversed = ''
  for (let i = value.length -1; i >= 0; i--) {
    reversed += value[i]
  }
  return reversed
}

const reverse_iter2 = (value) => {
  if (!isString(value)) return null
  let reversed = ''
  for (let char of value) {
    reversed = char + reversed;
  }
  return reversed
}

function reverse_recursive(value) {
  if (value === "") {
      return "";
  } else {
      return reverse_recursive(value.substr(1)) + value.charAt(0);
  }
}

function reverse_reduce(value) {
  return value.split('').reduce((rev, char) => char + rev, '');
}



console.log(reverse_method('reverse'))
console.log(reverse_iter('iter'))
console.log(reverse_iter2('iter2'))
console.log(reverse_recursive("recursion"))
console.log(reverse_reduce("reduce"))