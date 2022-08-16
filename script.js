const $ = document.querySelector.bind(document);
const API_URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

// Elements HTML
let btnConverter = $('#btnConverter');
let userInput = $("#userI");
let resultado = $('.p_result');
let updateCoinData = $("#updateCoin");
let coinDayValue = $(".coin-value")
const listCoins = $('#coins');

// GET UPDATE COIN DATA
async function UPDATE_DATA_COIN() {
   // Fetching coin data
   const resp = await fetch(API_URL);
   const resp_data = await resp.json();
   console.log(resp_data);
   // RETURN COIN DATA
   const coinDataSelected = resp_data.USDBRL;
   updateCoinData.innerHTML = `<p>Dados atualizados: ${coinDataSelected.create_date}</p>`;
}
UPDATE_DATA_COIN();

function converterValor(a, b) {
   return (a * b).toFixed(2);
}

function converterBtc(a, b) {
   return (a * b).toFixed(3);
}

btnConverter.addEventListener('click', async (e) => {
   e.preventDefault();

   let valueSelected = listCoins.options[listCoins.selectedIndex].value;
   console.log(`Moeda selecionada ${valueSelected}`);

   // Fetching coin data
   const resp = await fetch(API_URL);
   const resp_data = await resp.json();
   // Return data fetching
   const dolarSelect = resp_data.USDBRL;
   const euroSelect = resp_data.EURBRL;
   const bitcSelect = resp_data.BTCBRL;

   // OPTIONS AVAILABLE
   const dolarValue = Number(parseFloat(dolarSelect.bid));
   const euroValue = Number(parseFloat(euroSelect.bid));
   const bitValue = Number(parseFloat(bitcSelect.bid));

   if(userInput.value <= 0) {
      resultado.innerText = 'O valor digitado não pode ser 0'
   } else if(valueSelected === 'dolar') {
      resultado.innerText = `R$${userInput.value} equivale a US$${converterValor(userInput.value, dolarValue)}`
   } else if(valueSelected === 'euro') {
      resultado.innerText = `R$${userInput.value} equivale a £${converterValor(userInput.value, euroValue)}`
   } else {
      resultado.innerText = `R$${userInput.value} equivale a ₿${converterBtc(userInput.value, bitValue)}`
   }

});



