import {
  exchangeForm, giveInput,
  giveCurrencySelect,receiveCurrencySelect,
  commissionOutput, formCheckbox, 
  modalWrapper, modalClose, 
  demonstrationLinks,
  logInBtns, logOutBtns,
} from './elements.js';

import {
  DEMO_HEAD, DEMO_MESSAGE,
  LOGIN_HEAD, LOGIN_MESSAGE, 
  LOGOUT_HEAD, LOGOUT_MESSAGE, 
} from "./consts.js";

import { userState, dataState } from "./state.js";

import {
  updateCurriency, exchange,
  callToModal, addNewApplication,
  login,
} from "./app-main-functions.js";


logInBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    login(true)
  })
})

logOutBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    login(false)
  })
})


// Обработчики событий
demonstrationLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    callToModal(DEMO_HEAD, DEMO_MESSAGE);
  })
})

giveCurrencySelect.addEventListener('change', function () {
  dataState.set('selectedGiveCurrency', this.value);
  // так же ВАЛИДАЦИЯ нужна полю currentGive
  updateCurriency();
})

receiveCurrencySelect.addEventListener('change', function () {
  dataState.set('selectedReceiveCurrency', this.value);
  // так же ВАЛИДАЦИЯ нужна полю currentGive
  updateCurriency();
})

giveInput.addEventListener('input', function(){
  this.value = this.value.replace(/\D/, '');
  // так же ВАЛИДАЦИЯ нужна полю currentGive
  dataState.set('currentGive', this.value);
  updateCurriency();
})


exchangeForm.addEventListener('submit', function(event){
  event.preventDefault();
  if (dataState.get('isChecked')) {
    exchange();
  } else {
    alert('Чекни чекбокс сначала!');
    // здесь нужна будет валидация
    // и её нужно будет вынести в модуль validation.js
  }

  // так же валидация нужна полю currentGive
})

formCheckbox.addEventListener('change', function(){
   dataState.set('isChecked', this.checked);
})

modalClose.addEventListener('click', function(){
   modalWrapper.style.display = 'none';
})
