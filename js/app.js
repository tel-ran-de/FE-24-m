import {
  exchangeForm, giveInput, receiveInput,
  giveCurrencySelect,receiveCurrencySelect,
  rateOutput, commissionOutput, formSubmit, 
  formCheckbox, modalWrapper, modalClose, 
  modalHeader, modalContent,
} from './elements.js';

import {
  EXCHANGE_HEAD, EXCHANGE_MESSAGE
} from "./consts.js";

import getDataCurrency from "./api.js";

import {
  renderCurrencySelect, renderRate,
  renderCommission, renderApplications,
} from "./render.js";

import calculateСurriency from "./calc.js";

import state from "./state.js";


initialApp();
async function initialApp(){ // инициализация приложения
  const dataCurrency = await getDataCurrency(); // получили данные
  state.set('currencies', dataCurrency.conversion_rates); // получили список валют и их значение 
  renderCurrencySelect(); // отрендерили selects
  state.set('selectedGiveCurrency', giveCurrencySelect.value); // после рендеринга 
  state.set('selectedReceiveCurrency', receiveCurrencySelect.value); // обновили state
  giveInput.disabled = false; // app state
  giveCurrencySelect.disabled = false; // app state
  receiveCurrencySelect.disabled = false; // app state
}

function updateCurriency() {
  calculateСurriency(); // обновить calc state
  renderRate(); // рендерим rate
  if (state.currentGive === '') return false
  receiveInput.value = state.get('objectCurriency').outputMoney; // вывели итоговую сумму в receiveInput
  renderCommission(); // рендерим commission
  formSubmit.disabled = false;
}

function exchange(argument) {
  addNewApplication();
  callToModal(EXCHANGE_HEAD, EXCHANGE_MESSAGE);
}



function callToModal(head, message) {
  modalHeader.textContent = head;
  modalContent.textContent = message;
  modalWrapper.style.display = 'block';
}


// Applications to LOCALSTORAGE
function addNewApplication(){
  const applications = JSON.parse(localStorage.getItem('applications')) || [];
  // создали строку времени
  const now = new Date();
  let month;
  if (now.getMonth()+1 < 10) {
    month = `0${now.getMonth()+1}`;
  } else {
    month = `${now.getMonth()+1}`;
  }
  // создать объект application
  const application = {
    date: `${now.getDate()}.${month}.${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`,
    currentGive: state.currentGive,
    selectedGiveCurrency: state.selectedGiveCurrency,
    outputMoney: state.objectCurriency.outputMoney,
    selectedReceiveCurrency: state.selectedReceiveCurrency,
  }
  applications.unshift(application);
  if(applications.length > 4){
    applications.pop();
  }
  // обновить localStorage
  localStorage.setItem('applications', JSON.stringify(applications));
  // отрендерить applications
  renderApplications();
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
  state.currentGive = this.value;
  updateCurriency();
})


exchangeForm.addEventListener('submit', function(event){
  event.preventDefault();
  if (state.isChecked) {
    exchange();
  } else {
    console.log('Чекни чекбокс сначала!');
    // здесь нужна будет валидация
    // и её нужно будет вынести в модуль validation.js
  }

  // так же валидация нужна полю currentGive
})

formCheckbox.addEventListener('change', function(){
   state.isChecked = this.checked;
})

modalClose.addEventListener('click', function(){
   modalWrapper.style.display = 'none';
})

