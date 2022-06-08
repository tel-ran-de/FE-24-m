import { useState } from 'react';

import Select from '../../ui-kit/select';
import GroupRadioInput from '../../ui-kit/radioInput';
import CheckboxInput from '../../ui-kit/checkboxInput';

import FullName from './FullName';



const options = [
	{
		value:"Full stack",
		text:"Full stack",
	},
	{
		value:"Frontend",
		text:"Frontend",
	},
	{
		value:"Backend",
		text:"Backend",
	},
];


const radioContent = [
	{
		isLabel:true,
		textLabel:"2000$",
		inputName:"radio",
		inputId:"junior",
	},
	{
		isLabel:true,
		textLabel:"4000$",
		inputName:"radio",
		inputId:"middle",
	},
	{
		isLabel:true,
		textLabel:"6000$",
		inputName:"radio",
		inputId:"senior",
	},
];


function Form() {

  return (
  	<form action="">

  		<FullName />

  		<Select name="name" options={options}/>

  		<GroupRadioInput
  			radioContent={radioContent}
  		/>

  		<CheckboxInput 
  			isLabel
  			textLabel="Согласны с обработкой данных?"
  			inputName="checkbox"
  			inputId="checkbox"
  		/>

  		<button type="submit">submit</button>

  	</form>
  );
}

export default Form;



// 1. Три input name,surname, fullName - не редактируемый(собранный из name,surname)
// 2. Checkbox без нажатия которого нельзя сделать submit (Согласны с обработкой данных?)
// 3. Select с выбором профессии (Full stack, Frontend, Backend)
// 4. Выбор из трех размеров зарплат radio buttons (2000$,4000$,6000$)
// 5. Кнопка submit (Вынести в ui-kit)
// 6. При sumbit собрать данные в объект и отобразить в console.log()
