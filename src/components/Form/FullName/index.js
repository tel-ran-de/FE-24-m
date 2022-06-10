import { useState, useEffect } from 'react';
import TextInput from '../../../ui-kit/textInput';

function FullName(props) {
  const [ name, setName ] = useState('');
  const [ surname, setSurname ] = useState('');

  const fullName = props.fullName;
  const setFullName = props.setFullName;

  useEffect(() => {
    props.setFullName(`${name} ${surname}`)
  },[name, surname])

  return (
    <>
      <TextInput
        isLabel
        textLabel={"Name"}
        inputId={"name"}
        inputName={"name"}
        value={name}
        setValue={setName}
      />

      <TextInput
        isLabel
        textLabel={"Surname"}
        inputId={"surname"}
        inputName={"surname"}
        value={surname}
        setValue={setSurname}
      />

      <TextInput
        disabled
        isLabel
        textLabel={"Full Name"}
        inputId={"fullName"}
        inputName={"fullName"}
        value={fullName}
      />      
    </>
  );
}

export default FullName;