import  Header  from "./MyComponents/Header";
import React from 'react';
import Footer from "./MyComponents/Footer";
import Todos  from "./MyComponents/Todos";
// import Todo from "./MyComponents/Todo";
import { useState } from "react";


function App() {
  let OnDelete = (todo)=>
{
console.log("Todo is deleted" , todo)
SetList(list.filter((e)=>
{
return e!==todo;
}
))
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
     <Header title="MY TODOS LIST"/>
     <Todos list={list} OnDelete={OnDelete}/>
     {/* <Todo/> */}
     <Footer/>
     </>
  );
}
export default App;
