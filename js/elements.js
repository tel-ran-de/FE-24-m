// Объявляем переменные для получения HTML элементов
const exchangeForm = document.querySelector('.exchange_form'),
      giveInput = document.getElementById('give-amount'),
      receiveInput = document.getElementById('receive-amount'),
      giveCurrencySelect = document.getElementById('give_currency'),
      receiveCurrencySelect = document.getElementById('receive_currency'),
      rateOutput = document.querySelector('.exchange_form__rate'),
      commissionOutput = document.querySelector('.exchange_form__commission'),
      formSubmit = document.querySelector('.exchange_form__submit'),
      formCheckbox = document.querySelector('.exchange_form__checkbox'),
      
      applicationsSection = document.querySelector('.applications'),
      applicationsList = document.querySelector('.applications__list'),

      modalWrapper = document.querySelector('.modal-wrapper'),
      modalClose = document.querySelector('.modal__close'),
      modalHeader = document.querySelector('.modal__header'),
      modalContent = document.querySelector('.modal__content'),

      demonstrationLinks = document.querySelectorAll('.demonstration'),

      logInBtns = document.querySelectorAll('.login-btn'),
      logOutBtns = document.querySelectorAll('.logout-btn');



export {
	exchangeForm, giveInput, receiveInput,
  giveCurrencySelect, receiveCurrencySelect,
  rateOutput, commissionOutput, formSubmit, 
  formCheckbox, applicationsSection, applicationsList,
  modalWrapper, modalClose, modalHeader, modalContent,
  demonstrationLinks, logInBtns, logOutBtns,
};