import { userState, dataState, calcState } from "./state.js";

function calculateCoeff() {
  return dataState.get('currencies')[dataState.get('selectedReceiveCurrency')]/dataState.get('currencies')[dataState.get('selectedGiveCurrency')];
}
function calculatePercent() {
  let commission = userState.get('isClient') ? 0 : 1;
  return (calcState.get('changedMoney') / 100) * commission;
}
function calculateChangedMoney() {
  return calcState.get('coeff')*dataState.get('currentGive');
}
function calculateOutputMoney(changedMoney,percent) {
  return calcState.get('changedMoney') - calcState.get('percent');
}

function calculateСurriency() {
  // upd state
  calcState.set('coeff', calculateCoeff());
  calcState.set('changedMoney', calculateChangedMoney());
  calcState.set('percent', calculatePercent());
  calcState.set('outputMoney', calculateOutputMoney());
}


export default calculateСurriency;