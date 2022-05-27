import {
  giveInput, giveCurrencySelect,
  receiveCurrencySelect, formSubmit, 
  applicationsSection,
} from './elements.js';

import {
  renderApplications,
} from "./render.js";

const state = {
	// user state
	isClient: false,

	// data state
	currencies: [],
	selectedGiveCurrency: '',
	selectedReceiveCurrency: '',
	currentGive: '',
	isChecked: false,

	// calc state
	objectCurriency: {
		outputMoney: 0,
		changedMoney: 0,
		coeff: 0,
		percent: 0,
	},
	get: function(name) {
		return this[name]
	},
	set: function(name,value) {
		return this[name] = value
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


export default state;