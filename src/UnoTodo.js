import {useEffect, useState,useMemo } from 'react';
import SideBar from './components/SideBar';
import Todos from './components/Todos';
import './common-styles/reset.css';
import style from './index.module.css';
import { useDate, useLists } from './helpers';


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
          completed: true,
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
          completed: true,
          important: true,
        },
      ]
    },
  ]

  const [lists, setLists] = useLists(listDefault);
  const [selectedList, setSelectedList] = useState(lists[0]);


  // useMemo(()=>{console.log(lists)},[lists])

  return (
    <>
      <SideBar 
        lists = {lists} 
        setLists = {setLists}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      <Todos 
        lists = {lists}  
        setLists = {setLists}
        selectedList={selectedList}
      />
    </>
  )
}

export default UnoTodo;