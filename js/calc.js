import state from "./state.js";

function calculateCoeff(from,to) {
  return state.currencies[state.selectedReceiveCurrency]/state.currencies[state.selectedGiveCurrency];
}
function calculatePercent() {
  let commission = state.isClient ? 0 : 1;
  return (state.objectCurriency.changedMoney / 100) * commission;
}
function calculateChangedMoney() {
  return state.objectCurriency.coeff*state.currentGive;
}
function calculateOutputMoney(changedMoney,percent) {
  return state.objectCurriency.changedMoney - state.objectCurriency.percent;
}

function calculateСurriency() {
  // upd state
  state.objectCurriency.coeff = calculateCoeff();
  state.objectCurriency.changedMoney = calculateChangedMoney();
  state.objectCurriency.percent = calculatePercent();
  state.objectCurriency.outputMoney = calculateOutputMoney();
}


export default calculateСurriency;