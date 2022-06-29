import { useState } from 'react';

// контроль даты
function useDate(timeElapsed){
  const today = new Date(timeElapsed);
  return [ today.toDateString() ];
}

// контроль lists
function useLists(defaultValue) {

  const [ value, setValue ] = useState(defaultValue);


  function setListsUpdate(
    lists, 
    selectedList, 
    todoId,
    {
     changelistHeader,
     changeTodoCompleted,
     changeTodoImportant,
     changeTodoTitle,
    }
  ) {

    value.forEach(list => {
      if (list.id === lists[selectedList].id) {

        // List Change logic
        if (changelistHeader !== undefined) {
          list.header = changelistHeader;
        }

        // Todo change logic
        list.todos.forEach(todo => {
          if(todo.id === todoId){
            if (changeTodoCompleted !== undefined) {
              todo.completed = changeTodoCompleted;
            }
            if (changeTodoImportant !== undefined) {
              todo.important = changeTodoImportant;
            }
            if (changeTodoTitle !== undefined) {
              todo.title = changeTodoTitle;
            }
          }
        })
      }
    })

    setValue([...value])
  }

  return [ value, setListsUpdate ];
}

// контроль textInput
function useTextInput(defaultValue){
  const [value, setValue] = useState(defaultValue);
  const bind = {
    value,
    onChange: (e) => setValue(e.target.value)
  }
  return [value, setValue, bind]
}

// контроль checked
function useCheckboxInput(defaultValue){
  const [value, setValue] = useState(defaultValue);
  const bind = {
    value,
    onChange: (e) => setValue(!value),
    checked: value,
  }
  return [value, setValue, bind]
}

export { useDate, useLists, useTextInput, useCheckboxInput };