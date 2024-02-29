const express=require('express')

const router =express.Router()
let {people}=require('../data.js')

router.get('/',(req,res)=>{

    res.status(200).json({success:true,data:people})
})

router.post('/postman',(req,res)=>{
    const{name}=req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide the name value'})
    }
    res.status(201).send({success:true,person:name})
})

// get is the default method



router.put('/:id',(req,res)=>{
    const{name}=req.body
    const{id}=req.params;
   
    const person=people.find((person)=>person.id===Number(id));

    if(!person){
        return res.status(404).send(`NO PERSON FOUND ${id} id `)
    }
    person.name=name;

    res.send(people);


})

module.exports=router