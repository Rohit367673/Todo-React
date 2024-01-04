import React, { useEffect, useState } from 'react'

import { TodoProvider } from './project5/TodoContext'
import Todoitem from './project5/component/Todoitem'
import Todoform from './project5/component/Todoform'

function AppT() {
  const [todos,setTodos]=useState([])
  const addtodo=(todo)=>{
setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updatedTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
    
  }
  //or you can use if else 
  // prev.map(eachvalue)=>{
  //   if (eachvalue.id===id){
  //     todo
  //   }
  //   else{
  //     prevTodo
  //   }
  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((Todo)=>Todo.id !==id))

  }

  const toggleComplete=(id)=>{
    setTodos(prev=>prev.map((prevTodo)=>prevTodo.id ===id ? {...prevTodo, completed:!prevTodo.completed}:prevTodo))

  }
  useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("todos"))
  if (todos&& todos.length>0){
    setTodos(todos)
  }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  

  
  return (
    <TodoProvider value={{todos,addtodo,deleteTodo,toggleComplete,updatedTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg mb-2 mt-2"><h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage your Todos</h1>
      <div className="mb-4">
        <Todoform/>

      </div>
      <div className="flex flex-wrap gap-y-3">
        {todos.map((todo)=>(
          <div key={todo.id} className="w-full"><Todoitem todo={todo}/></div>
        ))}
      </div>
      
      </div>
    </div>

    </TodoProvider>
  )
}

export default AppT

