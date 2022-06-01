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

import {
  inputNumberValidate,
  submitValidate,
} from "./validation.js";


// Обработчики событий
// LOGIN
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
// DEMONSTATION
demonstrationLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    callToModal(DEMO_HEAD, DEMO_MESSAGE);
  })
})

// FORM EXCHANGE
giveCurrencySelect.addEventListener('change', function () {
  dataState.set('selectedGiveCurrency', this.value);
  updateCurriency();
})
receiveCurrencySelect.addEventListener('change', function () {
  dataState.set('selectedReceiveCurrency', this.value);
  updateCurriency();
})

giveInput.addEventListener('input', function(){
  if (this.value[0] === '0' && this.value.length > 1) {
    this.value = this.value.slice(1)
  }
  this.value = inputNumberValidate(this.value);
  dataState.set('currentGive', this.value);
  updateCurriency();
})

exchangeForm.addEventListener('submit', function(event){
  event.preventDefault();
  if (submitValidate()) {
    exchange();
  }
})

formCheckbox.addEventListener('change', function(){
   dataState.set('isChecked', this.checked);
})


// MODAL
modalClose.addEventListener('click', function(){
   modalWrapper.style.display = 'none';
})

