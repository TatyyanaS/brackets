module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = new Map(bracketsConfig);
  let sameBrackets = new Set();

  for (let [open, close] of bracketsConfig) {
      if (open === close) {
          sameBrackets.add(open);
      }
  }

  for (let char of str) {
      if (brackets.has(char)) {
          if (sameBrackets.has(char) && stack[stack.length - 1] === char) {
              stack.pop();
          } else {
              stack.push(char);
          }
      } else {
          if (stack.length === 0 || brackets.get(stack.pop()) !== char) {
              return false;
          }
      }
  }

  return stack.length === 0;
}
