import { useState } from 'react'

import Header from './components/Header'
import LangSelector from './components/LangSelector'
import Paragraph from './components/Paragraph'
import SubmitButton from './components/SubmitButton'


import {LangContext} from './LangContext'



function App() {
  const [ lang , setLang ] = useState('ENG')


  return (
    <div className="App">
        <LangContext.Provider value={lang}>
          <Header/>
          <Paragraph/>
          <SubmitButton/>
        </LangContext.Provider>
          <LangSelector
            lang={lang}
            setLang={setLang}
          />
    </div>
  );
}

export default App;
