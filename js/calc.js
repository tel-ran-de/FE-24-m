function calculateCoeff(from,to,currencies) {
  return currencies[to]/currencies[from];
}

function calculatePercent(changedMoney,commission) {
  return (changedMoney / 100) * commission;
}

function calculateChangedMoney(coeff,input) {
  return coeff*input;
}

function calculateOutputMoney(changedMoney,percent) {
  return changedMoney - percent;
}

function calculateСurriency(isClient) {
  let commission = isClient ? 0 : 1;
  return function(from, to, input, currencies) {

    const coeff = calculateCoeff(from,to,currencies);
    const changedMoney = calculateChangedMoney(coeff,input);
    const percent = calculatePercent(changedMoney,commission);
    const outputMoney = calculateOutputMoney(changedMoney,percent);

    return {
      coeff,
      changedMoney,
      percent,
      outputMoney
    }
  }
}


export default calculateСurriency;