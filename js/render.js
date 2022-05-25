import {
  giveCurrencySelect, receiveCurrencySelect,
  rateOutput, commissionOutput,
} from './elements.js';


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
function renderCurrencySelect(currencies) {
  Object.keys(currencies).forEach(currency => {
    addGiveCurrency(currency);
    addReceiveCurrency(currency);
  })
}

// render rate
function renderRate(selectedGiveCurrency,coeff,selectedReceiveCurrency) {
  rateOutput.innerHTML = `1 <span>${selectedGiveCurrency}</span> = ${coeff} <span>${selectedReceiveCurrency}</span>`
}

// render commission
function renderCommission(percent, selectedReceiveCurrency) {
  commissionOutput.innerHTML = `${percent} <span>${selectedReceiveCurrency}</span>`
}

export { 
  renderCurrencySelect, renderRate,
  renderCommission,
};