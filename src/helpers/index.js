function formatDateNow(){
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return today.toDateString();
}



// actions: {
//   changelistHeader: 'New value',
//   changeTodoCompleted: true, // false
//   changeTodoImportant: true, // false
// }

function updateLists(
  lists, 
  selectedList, 
  todoId,
  actions,
  ) {
  const listsUpdate = [];

  lists.forEach(list => {
    if (list.id === selectedList.id) {

      // List Change logic
      if (actions.changelistHeader !== undefined) {
        list.header = actions.changelistHeader;
      }

      // Todo change logic
      list.todos.forEach(todo => {
        if(todo.id === todoId){
          if (actions.changeTodoCompleted !== undefined) {
            todo.completed = actions.changeTodoCompleted;
          }
          if (actions.changeTodoImportant !== undefined) {
            todo.important = actions.changeTodoImportant;
          }
        }
      })
    }
    listsUpdate.push(list);
  })

  return listsUpdate;
}




export { formatDateNow, updateLists };