const $ = document.querySelector.bind(document);

// Elements HTML
let btnConverter = $('#btnConverter');
let userInput = $("#userI");
let resultado = $('.p_result');

const listCoins = $('#coins');

const convertFunction = (entry, value) => {
   return parseFloat(entry * value).toFixed(2);
}

btnConverter.addEventListener('click', (e) => {
   e.preventDefault()
   let valorEmReal;
   let valueSelected = listCoins.options[listCoins.selectedIndex].value;

   if(valueSelected === 'dolar') {
      valorEmReal = convertFunction(userInput.value, 5.32)
      resultado.innerText = `O valor convertido e ${valorEmReal} dolares`;
   } 
   else if (valueSelected === 'euro') {
      valorEmReal = convertFunction(userInput.value, 5.35)
      resultado.innerText = `O valor convertido e ${valorEmReal} euros`;
   } 
   else if (valueSelected === 'libra') {
      valorEmReal = convertFunction(userInput.value, 6.32)
      resultado.innerText = `O valor convertido e ${valorEmReal} libras`;
   }
   else if (valueSelected === 'bitcoin') {
      valorEmReal = convertFunction(userInput.value, 109.230,01)
      resultado.innerText = `O valor convertido e ${valorEmReal} bitcoins`
   }
});
