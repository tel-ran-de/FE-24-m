import { giveInput, giveCurrencySelect, receiveCurrencySelect } from './elements.js';

import getDataCurrency from "./api.js";

import { renderCurrencySelect } from "./render.js";

import { dataState } from "./state.js";

import "./event-handlers.js";

initialApp();
async function initialApp(){ // инициализация приложения
  const dataCurrency = await getDataCurrency(); // получили данные
  dataState.set('currencies', dataCurrency.conversion_rates); // получили список валют и их значение 
  renderCurrencySelect(); // отрендерили selects
  dataState.set('selectedGiveCurrency', giveCurrencySelect.value); // после рендеринга 
  dataState.set('selectedReceiveCurrency', receiveCurrencySelect.value); // обновили state
  giveInput.disabled = false; // app state
  giveCurrencySelect.disabled = false; // app state
  receiveCurrencySelect.disabled = false; // app state
}

