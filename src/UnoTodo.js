import {useEffect, useState} from 'react';
import SideBar from './components/SideBar';
import TodosContainer from './components/TodosContainer';
import './common-styles/reset.css';
import style from './index.module.css';
import { useDate } from './helpers';


function UnoTodo() {

  const [ dateNow ] = useDate(Date.now());



  const listDefault = [
    {
      id: Date.now(),
      header: 'Task list',
      todos: [
        {
          id: Date.now()+1,
          title: 'Todo 1',
          note: 'Do something important',
          date: dateNow,
          completed: false,
          important: true,
        },
        {
          id: Date.now()+2,
          title: 'Todo 2',
          note: 'Do something important',
          date: dateNow,
          completed: true,
          important: true,
        },
        {
          id: Date.now()+3,
          title: 'Todo 3',
          note: 'Do something',
          date: dateNow,
          completed: false,
          important: false,
        },
      ]
    },
  ]



  const [lists, setLists] = useState(listDefault);
  const [selectedList, setSelectedList] = useState(lists[0]);

  return (
    <>
      <SideBar 
        lists = {lists} 
        setLists = {setLists}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      <TodosContainer 
        lists = {lists}  
        setLists = {setLists}
        selectedList={selectedList}
      />
    </>
  )
}

export default UnoTodo;