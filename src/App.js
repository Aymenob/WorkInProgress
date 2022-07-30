import logo from './logo.svg';
import './App.css';
import { createSlice } from '@reduxjs/toolkit';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodoList,checkboxclicked,Delete,handlechange,handleshow} from './slice';
import Filter from './components/filter';
import Navbar from './components/navbar';
function App() {
  const dispatch=useDispatch()
  const todolist=useSelector((state)=>state.counter.todolist);
  const [Typed,updateTyped]=useState("")
  const [section,updatesection]=useState("")


  console.log(todolist)
 
  
  return (
    <div class="container1"> 
    <section class="container2">
    
    <input  onKeyDown={(e)=>e.keyCode==13? Typed===""?alert("your todo is empty"):dispatch(addTodoList({id:Math.random(),Title:Typed,checked: false, Done: false,show:true}))&&updateTyped(""):NaN} placeholder='write your todo here...'  style={{textAlign:"center",borderRadius:"7px"}} value={Typed} onChange={(e)=>updateTyped(e.target.value)}></input>
    <button style={{borderRadius:"7px"}}  onClick={(e)=>Typed===""?alert("your todo is empty"):dispatch(addTodoList({id:Math.random(),Title:Typed,checked: false, Done: false,show:true}))&&updateTyped("")}>Add Todo</button>
    </section>
    <div class="container3">
    <Navbar updatesection1={()=>updatesection("")} updatesection2={(e)=>updatesection("Done")} updatesection3={(e)=>updatesection("Undone")}/>
    </div>
    <div class="container4" >
    <Filter handlechange={(e,Title)=>dispatch(handlechange([e.target.value,Title]))} handleshow={(Title)=>dispatch(handleshow(Title))} handleDelete={(Title)=>dispatch(Delete(Title))} todolist={section==="Done"?todolist.filter(e=>e.Done===true):section==="Undone"?todolist.filter(e=>e.Done===false):section===""?todolist:todolist} handleClick={(e)=>dispatch(checkboxclicked(e.target.name))}/>
    </div>
    </div>
  );
}

export default App;

