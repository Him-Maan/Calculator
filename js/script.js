// // Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      try{
      string = eval(string);
      document.querySelector('input').value = string;
      }catch(error){
        document.querySelector('input').value = error;
      }
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML === '←') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  });
});


// const input = document.querySelector('.input');

// function addToInput(value) {
//   input.value += value;
// }

// function clearInput() {
//   input.value = '';
// }
// function calculateResult() {
//   try {
//     input.value = eval(input.value);
//   } catch (error) {
    
//     input.value = 'Error';
//   }
// }
// const buttons = document.querySelectorAll('.button');
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const buttonValue = button.textContent;

//     switch (buttonValue) {
//       case 'C':
//         clearInput();
//         break;
//       case '=':
//         calculateResult();
//         break;
//       case '←':
//         input.value = input.value.slice(0, -1);
//         break;
//       default:
//         addToInput(buttonValue);
//     }
//   });
// });



// document.addEventListener('keydown', (event) => {
//   const key = event.key;
//   if (/^[0-9\+\-\*\/\%\.\=]$/.test(key)) {
//     event.preventDefault();
//     switch (key) {
//       case 'Enter':
//         calculateResult();
//         break;
//       case 'Backspace':
//         input.value = input.value.slice(0, -1);
//         break;
//       default:
//         addToInput(key);
//     }
//   } else if (key === 'Escape') {
//     clearInput();
//   }
// });
