import { useState } from 'react';



// контроль даты yyyy-MM-dd
function useDate(timeElapsed){
  const today = new Date(timeElapsed);
  return [ today.toDateString() ];
}

function useCreateDate(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  
  const currentMonth = month < 10 ? `0${month}` : month;
  const currentDay = day < 10 ? `0${day}` : day;
  
  return `${year}-${currentMonth}-${currentDay}`;
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
     changeTodoNote,
     changeTodoDate,
     deleteTodo,
    }
  ) {
    console.log(deleteTodo);

    
    value.forEach(list => {
      if (list.id === lists[selectedList].id) {

        // List Change logic
        if (changelistHeader !== undefined) {
          list.header = changelistHeader;
        }

        const listTodos = [];
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
            if (changeTodoNote !== undefined){
              todo.note = changeTodoNote;
            }
            if (changeTodoDate !== undefined){
              todo.date = changeTodoDate;
            }
            if(!deleteTodo){
              listTodos.push(todo);
            }
          } else {
            listTodos.push(todo);
          }
          
        })
        console.log(listTodos);
        list.todos = listTodos;
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

function useShowDate(value){
  const date = new Date(value);

  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weekDay = week[date.getDay()];

  const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthArray[date.getMonth()];

  const day = date.getDate();
  const currentDay = day < 10 ? `0${day}` : day;

  return `${weekDay}, ${currentDay} ${month}`
}
// console.log(uTestShownDate());

export { useDate, useLists, useTextInput, useCheckboxInput, useCreateDate, useShowDate };