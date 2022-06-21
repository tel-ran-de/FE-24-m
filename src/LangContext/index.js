import { createContext } from 'react'


const context = { 
    ENG:{
        header:'Hello world',
        paragraph:'Something text',
        submit:'Submit'
    },  
    RU: {
        header:'Привет мир',
        paragraph:'Какой-то текст!',
        submit:'Отправить'
    },
}

const LangContext = createContext(context.ENG)


export { context, LangContext };