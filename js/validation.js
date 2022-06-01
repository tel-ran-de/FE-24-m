import { giveInput } from './elements.js';
import { dataState } from "./state.js";

function inputNumberValidate(value) {
  value = value.replace(/\D/, '');
  if (value === '') return 0
  else return value
}

function submitValidate(argument) {
  if (dataState.get('isChecked') && giveInput.value !== '0' && giveInput.value !== '') {
    return true
  } else {
    if (!dataState.get('isChecked')){
      alert('Checkbox need to fill!');
    } 
    if (!giveInput.value || giveInput.value === '0' || giveInput.value === '') {
       alert('Give Input need to fill!')
    }
  }
}

export {
	inputNumberValidate,
	submitValidate,
}