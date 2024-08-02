const express =require('express');
const { creatTodo, updatTodo } = require('./type');
const { Todo } = require('./db/todo');
const cor=require("cors")


const app=express();
app.use(express.json())
app.use(cor())
const port=5000;

app.post('/todos',async (req,res)=>{
 
    const createPayload=req.body;
    const parsedPayload=creatTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"invalid schema "
        })
        return;
    }
    const title=req.body.title
    const discription=req.body.discription

    await Todo.create({
        title:title,
        discription:discription,
        completed:false
    })
        res.json({
            msg:"created todo"
        })
    

})
app.get('/todos',async(req,res)=>{

const todos=await Todo.find();
if(!todos){
    res.json({
        msg:"not any todo"
    })
}
console.log(todos)
res.json({
    todos
})

})
app.post('/completed',async(req,res)=>{
    const updatPayload=req.body;
    const parsedPayload=updatTodo.safeParse(updatPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"not updated"
        })
        return;
    }
    await Todo.updateMany({
        _id:req.body.id
    },
    {
        completed:true
    })
    res.json({
        msg :"mark as done!"
    })
})

app.listen(port,()=>{
    console.log("server is running on port "+`${port}`)
})