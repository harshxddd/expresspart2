const express=require('express')
const app=express()
const logger =require('./logger')

// req=>middleware=>res

app.use('/api',logger)

// logger is middleware which is the 
app.get('/',(req,res)=>{
   
res.send('Home')

})
app.get('/about',(req,res)=>{
res.send('ABOUT')

})
app.get('/api/products',(req,res)=>{

res.send('Products')

})
app.get('/api/items',(req,res)=>{

res.send('Items')

})

app.listen(3000,()=>{
    console.log('Listening on port 3000......')
})