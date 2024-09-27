module.exports = function check(str, bracketsConfig) {
  const stack = []
  const openBrackets = new Set()
  const map = {}

  for (let [open, close] of bracketsConfig) {
    openBrackets.add(open)
    map[close] = open
  }

  for (let char of str) {
    if (openBrackets.has(char)) {// если на входе открывающая скобка
      if (map[char] === char) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
          stack.pop()
        } else {
          stack.push(char)
        }
      } else {
        stack.push(char)
      }
    } else {//если на входе закрывающая скобка
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false
      } else {
        stack.pop()
      }
    }
  }

  return stack.length === 0
}
