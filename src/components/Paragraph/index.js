import { useContext } from 'react'
import { LangContext , context } from '../../LangContext/' 
   

function Paragraph () {

    const langSelected = useContext(LangContext);
    const paragraphText = context[langSelected].paragraph;
    return (
        <p>{paragraphText}</p>
    )
}

export default Paragraph;