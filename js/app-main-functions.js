import {
  receiveInput, formSubmit, 
  modalWrapper, modalHeader, modalContent,
  logInBtns, logOutBtns,
} from './elements.js';

import {
  EXCHANGE_HEAD, EXCHANGE_MESSAGE,
  LOGIN_HEAD, LOGIN_MESSAGE,
  LOGOUT_HEAD, LOGOUT_MESSAGE,
} from "./consts.js";

import {
  renderRate, renderCommission, renderApplications,
} from "./render.js";

import calculateСurriency from "./calc.js";

import { userState, dataState, calcState } from "./state.js";


function updateCurriency() {
  calculateСurriency(); // обновить calc state
  renderRate(); // рендерим rate
  if (dataState.currentGive === '') return false
  receiveInput.value = calcState.get('outputMoney'); // вывели итоговую сумму в receiveInput
  renderCommission(); // рендерим commission
  formSubmit.disabled = false;
}

function exchange() {
  addNewApplication();
  callToModal(EXCHANGE_HEAD, EXCHANGE_MESSAGE);
}

function callToModal(head, message) {
  modalHeader.textContent = head;
  modalContent.textContent = message;
  modalWrapper.style.display = 'block';
}

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
    currentGive: dataState.get('currentGive'),
    selectedGiveCurrency: dataState.get('selectedGiveCurrency'),
    outputMoney: calcState.get('outputMoney'),
    selectedReceiveCurrency: dataState.get('selectedReceiveCurrency'),
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

function login(status) {
    userState.set('isClient', status);
    updateCurriency();

    logInBtns.forEach(btn => {
      btn.style.display = status ? 'none' : 'block';
    });
    logOutBtns.forEach(btn => {
      btn.style.display = status ? 'block' : 'none';
    })
    
    if (status) {
      callToModal(LOGIN_HEAD, LOGIN_MESSAGE);
    } else {
      callToModal(LOGOUT_HEAD, LOGOUT_MESSAGE);
    }
}

export {
  updateCurriency, exchange,
  callToModal, addNewApplication,
  login,
}


