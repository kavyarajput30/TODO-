import { useState } from "react";
import { useTodo } from "../context";


const TodoForm = ()=>{

const[newtodo, setnewTodo] = useState("")

    const {addTodo} = useTodo();

   const add=(e)=>{
     e.preventDefault();
      if(newtodo===""){
        return;
      }
       addTodo({  todo:newtodo, completed:false});
       setnewTodo("");
    }

  return(
    <form action="" onSubmit={add} style={{display:"flex", justifyContent:"space-between"}}>

    <input type="text" placeholder="Enter Your Task....." value={newtodo} onChange={(e)=>{
          
          setnewTodo(e.target.value);
          

    }}  style={{color:"black", padding:"0px 5px",width:"60%", borderRadius:"5px",fontSize:"18px",outline:"none"}} />
    <button style={{backgroundColor:"pink", margin:"5px", padding:"10px 20px" , borderRadius:"5px"}}>Add</button>

    </form>
  )
}

export default TodoForm;
