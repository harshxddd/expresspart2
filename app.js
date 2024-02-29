const express=require('express')
const app=express()

const people=require('./routes/people')
const credential=require('./routes/auth')

app.use(express.static('./methods-public'))

// parse form data
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/people',people)
app.use('/login',credential)



app.listen(3000,()=>{
    console.log("SERVER IS LISTENING ON PORT 3000....")
})
