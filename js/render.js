import {
  giveCurrencySelect, receiveCurrencySelect,
  rateOutput, commissionOutput, applicationsList,
  applicationsSection,
} from './elements.js';

import state from "./state.js";

// render currency options 
const addGiveCurrency = addOption(giveCurrencySelect);
const addReceiveCurrency = addOption(receiveCurrencySelect);
function addOption(select){
  return function(currency) {
    const option = document.createElement('option');
    option.textContent = currency;
    option.value = currency;
    select.appendChild(option);
  }
}
function renderCurrencySelect() {
  Object.keys(state.currencies).forEach(currency => {
    addGiveCurrency(currency);
    addReceiveCurrency(currency);
  })
}

// render rate
function renderRate() {
  rateOutput.innerHTML = `1 <span>${state.selectedGiveCurrency}</span> = ${state.objectCurriency.coeff} <span>${state.selectedReceiveCurrency}</span>`
}

// render commission
function renderCommission() {
  commissionOutput.innerHTML = `${state.objectCurriency.percent} <span>${state.selectedReceiveCurrency}</span>`
}

// render applications
function renderApplications() {
  applicationsSection.style.display = 'block';
  const applications = JSON.parse(localStorage.getItem('applications'))
  applicationsList.innerHTML = '';
  for (let i = 0; i < applications.length; i++) {
    const li = document.createElement('li');
    li.classList.add('applications__list_item');
    li.innerHTML = `<p class="applications_list_item_time">${applications[i].date}</p>
                    <p class="applications__give_currency">${applications[i].currentGive}
                      <span>${applications[i].selectedGiveCurrency}</span>
                    </p>
                    <span><img src="./img/Icons.svg" alt=""></span>
                    <p class="applications__received_currency">${applications[i].outputMoney}
                      <span>${applications[i].selectedReceiveCurrency}</span>
                    </p>`
    applicationsList.appendChild(li);
  }
}

export { 
  renderCurrencySelect, renderRate,
  renderCommission, renderApplications,
};