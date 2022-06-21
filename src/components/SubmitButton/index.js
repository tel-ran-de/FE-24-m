import { useContext } from 'react'
import { LangContext , context } from '../../LangContext/'
  

function SubmitButton () {
    const langSelected = useContext(LangContext);
    const submitText = context[langSelected].submit;

    return (
        <button type="submit">{submitText}</button>
    )
}

export default SubmitButton;