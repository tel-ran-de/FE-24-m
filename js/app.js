import {
  exchangeForm, giveInput, receiveInput,
  giveCurrencySelect,receiveCurrencySelect,
  rateOutput, commissionOutput, formSubmit, 
  formCheckbox
} from './elements.js';

import getDataCurrency from "./api.js";

import {
  renderCurrencySelect, renderRate,
  renderCommission,
} from "./render.js";

import calculateСurriency from "./calc.js";


// states ВЫНЕСТИ в МОДУЛЬ states.js
// user state
let isClient;

// data state
let currencies;
let selectedGiveCurrency;
let selectedReceiveCurrency;
let currentGive = giveInput.value;
let isChecked;

// calc state
let objectCurriency;
let outputMoney;
let changedMoney;
let coeff;
let percent;

// app state
giveInput.disabled = true;
giveCurrencySelect.disabled = true;
receiveCurrencySelect.disabled = true;
formSubmit.disabled = true;


initialApp();
async function initialApp(){ // инициализация приложения

  const dataCurrency = await getDataCurrency(); // получили данные

  currencies = dataCurrency.conversion_rates; // получили список валют и их значение

  renderCurrencySelect(currencies); // отрендерили selects

  selectedGiveCurrency = giveCurrencySelect.value; // после рендеринга 
  selectedReceiveCurrency = receiveCurrencySelect.value; // сохранили валюты в переменные


  giveInput.disabled = false; // app state
  giveCurrencySelect.disabled = false; // app state
  receiveCurrencySelect.disabled = false; // app state
}

function updateCurriency() { //ПОДУМАТЬ как разнести это
  const getObjectCurriency = calculateСurriency(isClient); // замкнули calc curriency функцию c статусом клиента 
  objectCurriency = getObjectCurriency(selectedGiveCurrency, selectedReceiveCurrency, currentGive, currencies); // получили объект calc

  // обновили calc state
  outputMoney = objectCurriency.outputMoney;
  changedMoney = objectCurriency.changedMoney;
  coeff = objectCurriency.coeff;
  percent = objectCurriency.percent;

  // рендерим rate
  renderRate(selectedGiveCurrency,coeff,selectedReceiveCurrency);

  if (currentGive !== '') {
    // вывели итоговую сумму в receiveInput
    receiveInput.value = outputMoney;

    // рендерим commission
    renderCommission(percent, selectedReceiveCurrency);
  }
}








// Обработчики событий
giveCurrencySelect.addEventListener('change', function () {
  selectedGiveCurrency = this.value;
  // так же ВАЛИДАЦИЯ нужна полю currentGive
  updateCurriency();
})

receiveCurrencySelect.addEventListener('change', function () {
  selectedReceiveCurrency = this.value;
  // так же ВАЛИДАЦИЯ нужна полю currentGive
  updateCurriency();
})

giveInput.addEventListener('input', function(){
  this.value = this.value.replace(/\D/, '');
  // так же ВАЛИДАЦИЯ нужна полю currentGive
  currentGive = this.value;
  updateCurriency();
})







exchangeForm.addEventListener('submit', function(event){ // СТАРТУЕМ ДАЛЬШЕ к localStorage
  event.preventDefault();
  if (isChecked) {
    console.log('SUBMIT');
  } else {
    console.log('Чекни чекбокс сначала!');
    // здесь нужна будет валидация
    // и её нужно будет вынести в модуль validation.js
  }

  // так же валидация нужна полю currentGive
})

formCheckbox.addEventListener('change', function(){
   isChecked = this.checked;
})









