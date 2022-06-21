import { useContext } from 'react'
import { LangContext , context } from '../../LangContext/' 

function Header () {
    const langSelected = useContext(LangContext);
    const headerText = context[langSelected].header;
    
    return (
        <h1>{headerText}</h1>
    )
}

export default Header;