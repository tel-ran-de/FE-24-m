import { useState } from 'react';
import style from './index.module.css';
import TodosContainer from './TodosContainer'
import TodoPanel from './TodoPanel'

function Todos({lists, setLists, selectedList}) {
  const [showPanelTodo, setShowPanelTodo] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);


  return (
    <div className={style.todos}>
      <TodosContainer 
        lists={lists} 
        setLists={setLists} 
        selectedList={selectedList} 
        showPanelTodo={showPanelTodo} 
        setShowPanelTodo={setShowPanelTodo}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      /> 
        <TodoPanel 
          showPanelTodo={showPanelTodo} 
          setShowPanelTodo={setShowPanelTodo}
          lists={lists} 
          setLists={setLists} 
          selectedList={selectedList}
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
        />
    </div>
  )
}

export default Todos;