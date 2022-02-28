const open = ['(', '{', '[', '|', '1', '3', '5', '7', '8']
const validationForm = {
 [')']: '(',
 ['}']: '{',
 [']']: '[',
 ['|']: '|',
 ['2']: '1',
 ['4']: '3',
 ['6']: '5',
 ['7']: '7',
 ['8']: '8',
};


module.exports = function check(str, bracketsConfig) {
 let stack = [];

 for(let i = 0; i < str.length; i++) {
  let currentItem = str[i];

  if(open.includes(currentItem)) {
    if(currentItem === '7' && stack[stack.length - 1] === '7' || currentItem === '8' && stack[stack.length - 1] === '8' || currentItem === '|' && stack[stack.length - 1] === '|') {
       stack.pop();
       continue;
    }

    stack.push(currentItem);
    console.log('Закинули в стек', stack);
  } else {
    if(stack.length === 0) {
       return false;
    }

   let topElement = stack[stack.length - 1];
   console.log('topElement', topElement)
    if (validationForm[currentItem] === topElement) {
     stack.pop();
   } else {
     return false;
   }
  }
 }

 console.log('stack пустой - true', stack.length === 0)
 return stack.length === 0;
}
