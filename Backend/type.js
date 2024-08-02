const zod =require('zod');

const creatTodo=zod.object({
    title:zod.string(),
    discription:zod.string()
})

const updatTodo=zod.object({
    id:zod.string()
})

module.exports={
    creatTodo,
    updatTodo
}