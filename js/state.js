import {
  giveInput, giveCurrencySelect,
  receiveCurrencySelect, formSubmit, 
  applicationsSection,
} from './elements.js';

import {
  renderApplications,
} from "./render.js";

class State {
  constructor(оbject) {
		for (let key in оbject) {
		  this[key] = оbject[key]
		}
  }
	get(name) {
    return getProp(this, name);
	}
	set(name, value) {
    setProp(this, name, value);
	}
}

const userState = new State(
	{
		isClient: false,
	}
);

const dataState = new State(
	{
		currencies: [],
		selectedGiveCurrency: '',
		selectedReceiveCurrency: '',
		currentGive: '',
		isChecked: false,
	}
);

const calcState = new State(
	{
		objectCurriency: {
			outputMoney: 0,
			changedMoney: 0,
			coeff: 0,
			percent: 0,
		},
	}
);



function getProp(object, name) {
  for(let key in object) {
		if (object[name] !== undefined) {
			return object[name];
		}
    if (typeof(object[key]) === 'object') {
       return getProp(object[key],name);
    }
  }
}

function setProp(object, name, value) {
  for(let key in object) {
		if (object[name] !== undefined) {
			object[name] = value;
		}
    if (typeof(object[key]) === 'object') {
       setProp(object[key], name, value);
    }
  }
}

// app state default
giveInput.disabled = true;
giveCurrencySelect.disabled = true;
receiveCurrencySelect.disabled = true;
formSubmit.disabled = true;

// applications state default
if (JSON.parse(localStorage.getItem('applications'))) {
	applicationsSection.style.display = 'block';
	renderApplications();
} else {
	applicationsSection.style.display = 'none';
}


export { userState, dataState, calcState };
