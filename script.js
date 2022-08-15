const $ = document.querySelector.bind(document);
const API_URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

// Elements HTML
let btnConverter = $('#btnConverter');
let userInput = $("#userI");
let resultado = $('.p_result');
let updateCoinData = $("#updateCoin");

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

// ! BUG ABAIXO
const convertFunction = (entry, value) => {
   return parseFloat(entry * value).toFixed(2);
}

btnConverter.addEventListener('click', async (e, coin) => {
   e.preventDefault();

   // Fetching coin data
   const resp = await fetch(API_URL);
   const resp_data = await resp.json();

   const dolarSelect = resp_data.USDBRL;
   const euroSelect = resp_data.EURBRL;
   const bitcSelect = resp_data.BTCBRL;

   // OPTIONS AVAILABLE
   const dolarValue = Number(parseFloat(dolarSelect.bid).toFixed(2));
   const euroValue = Number(parseFloat(euroSelect.bid).toFixed(2));
   const bitValue = Number(parseFloat(bitcSelect.bid).toFixed(3));

   e.preventDefault()
   let valueSelected = listCoins.options[listCoins.selectedIndex].value;
   console.log(`Moeda selecionada ${valueSelected}`);

   if(userInput.value <= 0) {
      console.log('Valor invalido')
      resultado.innerText = "Insira um valor valido para converter"
   }
   else if(valueSelected === 'dolar'){
      console.log(`O dolar hoje esta com um valor de ${dolarValue}`)
      resultado.innerText = `A conversao e ${(userInput.value * dolarValue)}`
   } else if(valueSelected === 'euro'){
      console.log(`O euro hoje esta com o valor igual a ${euroValue}`)
      resultado.innerText = `A conversao e ${(userInput.value * euroValue)}`
   } else {
      console.log(`O bitcoin hoje esta com o valor igual a ${bitValue}`)
      resultado.innerText = `A conversao e ${(userInput.value * bitValue)}`
   }

});

UPDATE_DATA_COIN();