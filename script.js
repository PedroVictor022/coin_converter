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
   const coinDataSelected = resp_data.USDBRL;

   // OPTIONS AVAILABLE
   const dolarValue = parseFloat(coinDataSelected.bid).toFixed(2);
   const dolarNumber = Number(dolarValue);

   e.preventDefault()
   let valueSelected = listCoins.options[listCoins.selectedIndex].value;
   console.log(`Moeda selecionada ${valueSelected}`);

   if(valueSelected === 'dolar'){
      console.log(`O dolar hoje esta com um valor de ${dolarValue}`)
      
      resultado.innerText = `A conversao e ${(userInput.value * dolarNumber).toFixed(2)}`
   }

});

UPDATE_DATA_COIN();