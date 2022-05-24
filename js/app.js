import {
  exchangeForm, giveInput, receiveInput,
  giveCurrencySelect,receiveCurrencySelect,
  rateOutput, commissionOutput, formSubmit, 
  formCheckbox
} from './elements.js';
import getDataCurrency from "./api.js";
import renderCurrencySelect from "./render.js";
import calculateСurriency from "./calc.js";

// states
// user state
let isClient;

// data state
let currencies;
let selectedGiveCurrency;
let selectedReceiveCurrency;
let currentGive;
let isChecked;

// calc state
let objectCurriency;
let outputMoney;
let changedMoney;
let coeff;
let percent;




// получили данные? инициализируем приложение
getDataCurrency().then(result => initialApp(result)); // получили данные от сервера и запустили инициализацию
function initialApp(dataCurrency){ // инициализация приложения

  currencies = dataCurrency.conversion_rates; // получили список валют и их значение

  renderCurrencySelect(dataCurrency); // отрендерили selects
  selectedGiveCurrency = giveCurrencySelect.value; // после рендеринга 
  selectedReceiveCurrency = receiveCurrencySelect.value; // сохранили валюты в переменные
}


// initialApp();
// async function initialApp(){ // инициализация приложения
//   const dataCurrency = await getDataCurrency();
//   currencies = dataCurrency.conversion_rates; // получили список валют и их значение
//   renderCurrencySelect(dataCurrency); // отрендерили selects
//   selectedGiveCurrency = giveCurrencySelect.value; // после рендеринга 
//   selectedReceiveCurrency = receiveCurrencySelect.value; // сохранили валюты в переменные
// }






function updateCurriency() {
  if (currentGive === '') {return false}

  const getObjectCurriency = calculateСurriency(isClient); // замкнули calc curriency функцию c статусом клиента 
  objectCurriency = getObjectCurriency(selectedGiveCurrency, selectedReceiveCurrency, currentGive, currencies); // получили объект calc

  // обновили calc state
  outputMoney = objectCurriency.outputMoney;
  changedMoney = objectCurriency.changedMoney;
  coeff = objectCurriency.coeff;
  percent = objectCurriency.percent;



  // вывели итоговую сумму в receiveInput
  receiveInput.value = outputMoney;

  // отрендерить остальное
  // .... как лучше?

  
}








// Обработчики событий
giveCurrencySelect.addEventListener('change', function () {
  selectedGiveCurrency = this.value;
  updateCurriency();
})

receiveCurrencySelect.addEventListener('change', function () {
  selectedReceiveCurrency = this.value;
  updateCurriency();
})

giveInput.addEventListener('input', function(){
  this.value = this.value.replace(/\D/, '');
  currentGive = this.value;
  updateCurriency();
})








// submit и checkbox пока не используем
// exchangeForm.addEventListener('submit', function(event){
//   event.preventDefault();
// })
// formCheckbox.addEventListener('change', function(){
//    isChecked = this.checked; 
// })









