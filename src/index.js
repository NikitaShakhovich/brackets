const getConfig = (bracketsConfig) => {
    let open = [];
    let validationForm = {};
    bracketsConfig.map(elem => {
        open.push(elem[0]);
        validationForm[elem[1]] = elem[0];
    });
    return {open: open, validationForm: validationForm,}
}

module.exports = function check(str, bracketsConfig) {

 let configData = getConfig(bracketsConfig);
 let stack = [];

 for(let i = 0; i < str.length; i++) {
  let currentItem = str[i];

  if (configData.open.includes(currentItem)) {
    if (currentItem === '7' && stack[stack.length - 1] === '7' || currentItem === '8' && stack[stack.length - 1] === '8' || currentItem === '|' && stack[stack.length - 1] === '|') {
       stack.pop();
       continue;
    }
    stack.push(currentItem);
  } else {
    if (stack.length === 0) {
       return false;
    }

    let topElement = stack[stack.length - 1];
    if (configData.validationForm[currentItem] === topElement) {
        stack.pop();
    } else {
        return false;
   }
  }
 }
 return stack.length === 0;
}
