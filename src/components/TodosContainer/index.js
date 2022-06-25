
import { useState } from 'react';
import style from './index.module.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoListHeader from './TodoListHeader'
import TodoPanel from './TodoPanel'

function TodosContainer({lists, setLists, selectedList}) {

  const [activeTab, setActiveTab] = useState('Todo');
  const [showPanelTodo, setShowPanelTodo] = useState(false);

  return (
    <>
      <main className={`${style.todosContainer} ${showPanelTodo ? style.showPanel : ''}`}>







        <section className={style.todosSection}>
          <TodoListHeader 
            lists={lists}
            setLists={setLists}
            selectedList={selectedList}
          />

          <div>
            <button
              className={`${style.todosBtn} ${activeTab === 'Todo' ? style.active : ''}`}
              onClick={() => setActiveTab('Todo')}
            >To Do</button>
            <button
              className={`${style.todosBtn} ${activeTab === 'Completed' ? style.active : ''}`}
              onClick={() => setActiveTab('Completed')}
            >Completed</button>
          </div>

          <TodoList 
            lists = {lists}  
            setLists = {setLists}
            activeTab = {activeTab}
            selectedList={selectedList}
            showPanelTodo = {showPanelTodo}
            setShowPanelTodo = {setShowPanelTodo}
          />
          <AddTodo 
            lists = {lists}  
            setLists = {setLists}
            setShowPanelTodo = {setShowPanelTodo}
          />
        </section>






      </main>

      <TodoPanel showPanelTodo={showPanelTodo} setShowPanelTodo={setShowPanelTodo} />
    </>
  )
}

export default TodosContainer;