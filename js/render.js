import {
  exchangeForm, giveInput, receiveInput,
  giveCurrencySelect,receiveCurrencySelect,
  rateOutput, commissionOutput, formSubmit, 
  formCheckbox
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
function renderCurrencySelect(dataCurrency) {
  Object.keys(dataCurrency.conversion_rates).forEach(currency => {
    addGiveCurrency(currency);
    addReceiveCurrency(currency);
  })
}

//  render ?


export default renderCurrencySelect;