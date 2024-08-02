const mongoose=require("mongoose")
const { boolean } = require("zod")

mongoose.connect("mongodb+srv://dinesh:154808@app.1r3zbdq.mongodb.net/TodoApp")

const todoSchema=new mongoose.Schema({
    title:String,
    discription:String,
    completed:Boolean
})


const Todo=mongoose.model("Todo",todoSchema)

module.exports={
    Todo
}