const express =require('express')

const app =express()
 
app.use(express.json())
let notes =[]

app.get('/notes',(req,res)=>{
        res.send(notes)
})


app.post('/notes',(req,res)=>{

     console.log(req.body)
       notes.push(req.body)
    res.send('notes is crated')
 })

 app.listen(3000,()=>{
           console.log('conected')   
 })