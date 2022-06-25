import { useState } from 'react';


function useDate(timeElapsed){
  const today = new Date(timeElapsed);
  return [ today.toDateString() ];
}



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
    }
  ) {

    value.forEach(list => {
      if (list.id === selectedList.id) {

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
          }
        })
      }
    })

    setValue([...value])

  }

  return [ value, setListsUpdate ];
}




export { useDate, useLists };