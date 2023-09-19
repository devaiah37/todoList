import  Header  from "./MyComponents/Header";
import React from 'react';
import Footer from "./MyComponents/Footer";
import Todos  from "./MyComponents/Todos";
// import Todo from "./MyComponents/Todo";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import AddTodo from "./MyComponents/AddTodo";


function App() {
  const OnDelete = (todo)=>
{
console.log("Todo is deleted" , todo)
SetList(list.filter((e)=>
{
return e!==todo;
}
))
}
const addTodo = (title,desc)=>
{
console.log("Adding Todo" ,title, desc)
let slno;
if(list.length==0)
{
  <p>No Todos to display</p>
  slno=0
}
else
{

   slno = list[list.length -1].slno +1;
}
let newTodo = {
slno: slno,
title: title,
desc: desc
}
// console.log(newTodo)
SetList([...list ,newTodo])
}
const [list, SetList] = useState([
  {
    slno: 1,
    title: "Go to the market",
    desc: "Buy fruits and vegetables"
  },
  {
    slno: 2,
    title: "Go to the mall",
    desc: "Buy black shirt"
  },
  {
    slno: 3,
    title: "Go to the bike mechanic",
    desc: "Bike wash and chain lube"
  }
]);

  return (
    <>
     <Header/>
     <AddTodo addTodo={addTodo}/>
     <Todos list={list} OnDelete={OnDelete}/>
     <Footer/>
     </>
  );
}
export default App;
