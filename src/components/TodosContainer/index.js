
import {useState} from 'react';
import style from './index.module.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoListHeader from './TodoListHeader'

function TodosContainer({lists, setLists, selectedList}) {

  const [activeTab, setActiveTab] = useState('Todo');

  return (
    <main className={style.todosContainer}>
      <section className={style.todosSection}>
        <TodoListHeader 
          lists={lists}
          setLists={setLists}
          selectedList={selectedList}
        />
        <button
          className={`${style.todosBtn} ${activeTab === 'Todo' ? style.active : ''}`}
          onClick={() => setActiveTab('Todo')}
        >To Do</button>
        <button
          className={`${style.todosBtn} ${activeTab === 'Completed' ? style.active : ''}`}
          onClick={() => setActiveTab('Completed')}
        >Completed</button>
        <TodoList 
          lists = {lists}  
          setLists = {setLists}
          activeTab = {activeTab}
          selectedList={selectedList}
        />  
      </section>
      <AddTodo 
        lists = {lists}  
        setLists = {setLists}
      />
    </main>  
  )
}

export default TodosContainer;