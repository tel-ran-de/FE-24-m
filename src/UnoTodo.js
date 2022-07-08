import {useEffect, useState,useMemo } from 'react';
import SideBar from './components/SideBar';
import Todos from './components/Todos';
import './common-styles/reset.css';
import { useLists, createDate } from './helpers';

import { useSelector } from 'react-redux';

function UnoTodo() {

  const listDefault = [
    {
      id: '44444',
      header: 'Task list',
      todos: [
        {
          id: '11111',
          title: 'Todo 1',
          note: 'Do something important',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
        },
        {
          id: '22222',
          title: 'Todo 2',
          note: 'Do something important',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
        },
        {
          id: '33333',
          title: 'Todo 3',
          note: 'Do something',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
        },
      ]
    },
  ]

  const [lists, setLists] = useLists(listDefault);
  const [selectedList, setSelectedList] = useState(0);

  const selectedListId = useSelector(state => state.lists.content[0].id);









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
        selectedListId={selectedListId}
      />
    </>
  )
}

export default UnoTodo;