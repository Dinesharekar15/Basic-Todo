
import { useState } from "react"


export function CreateTodo(){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    return(
        <div>
            <input style={{
                padding:10,
                margin:10
            }} type="text"  placeholder="Title"  onChange={function(e){  
                
                setTitle(e.target.value)
            }}  /><br /><br />
            <input style={{
                padding:10,
                margin:10
            }} type="text" placeholder="Discription"  onChange={function(e){
                
                setDescription(e.target.value)
            }}/><br /><br />
            <button 
            style={{
                padding:10,
                margin:10
            }}
            onClick={function(){
                fetch("http://localhost:5000/todos",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),
                    headers:{
                       "Content-Type": "application/json"
                    }
                }).then(async function(res){
                    const json=await res.json()
                    alert("todo added")
                    setDescription('')
                    setTitle('')
                }).catch(()=>{
                    console.error("There was a problem with the fetch operation:", error);
                        alert("Failed to add todo");
                })

            }}
             >Add Todo</button>
        </div>
    )
}