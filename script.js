const $ = document.querySelector.bind(document);
const API_URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

// Elements HTML
let btnConverter = $('#btnConverter');
let userInput = $("#userI");
let resultado = $('.p_result');
let updateCoinData = $("#updateCoin");

const listCoins = $('#coins');

// GET UPDATE COIN DATA
async function UPDATE_DATA_COIN(coin) {
   // Fetching coin data
   const resp = await fetch(API_URL);
   const resp_data = await resp.json();
   // RETURN COIN DATA
   const coinDataSelected = resp_data.USDBRL;
   updateCoinData.innerHTML = `<p>Dados atualizados: ${coinDataSelected.create_date}</p>`;
}


const convertFunction = (entry, value) => {
   return parseFloat(entry * value).toFixed(2);
}



btnConverter.addEventListener('click', async (e) => {
   e.preventDefault();

   // Fetching coin data
   const resp = await fetch(API_URL);
   const resp_data = await resp.json();

   e.preventDefault()
   let valueSelected = listCoins.options[listCoins.selectedIndex].value;



   console.log(`Moeda selecionada ${valueSelected}`)

});

UPDATE_DATA_COIN();



// if (userInput.value == 0) {
//    resultado.innerText = 'Preencha com algum valor valido'
// }
// else if (valueSelected === 'dolar') {
//    valorEmReal = convertFunction(userInput.value, 5.32)
//    resultado.innerText = `O valor convertido e ${valorEmReal} dolares`;
// }
// else if (valueSelected === 'euro') {
//    valorEmReal = convertFunction(userInput.value, 5.35)
//    resultado.innerText = `O valor convertido e ${valorEmReal} euros`;
// }
// else if (valueSelected === 'libra') {
//    valorEmReal = convertFunction(userInput.value, 6.32)
//    resultado.innerText = `O valor convertido e ${valorEmReal} libras`;
// }
// else if (valueSelected === 'bitcoin') {
//    valorEmReal = convertFunction(userInput.value, 109.230, 00)
//    resultado.innerText = `O valor convertido e ${valorEmReal},00 bitcoins`
// }