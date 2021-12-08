const express = require('express')
const router = express.Router()
const Client = require('../models/client')

router.post('/', async(req,res) => {
    const client = new Client({
        name: req.body.name,
        CPF: req.body.CPF,
        city: req.body.city,
        street: req.body.street,
        number: req.body.number,
        complement: req.body.complement,
        phoneNumber: req.body.phoneNumber,
        mobileNumber: req.body.mobileNumber,
        active: req.body.active
    })
    
    try{
        const a1 =  await client.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.get('/', async(req,res) => {
    try{
        const client = await Client.find()
        res.json(client)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const client = await Client.findById(req.params.id)
        res.json(client)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const client = await Client.findById(req.params.id) 
        client.name = req.body.name,
        client.CPF = req.body.CPF,
        client.city = req.body.city,
        client.street = req.body.street,
        client.number = req.body.number,
        client.complement = req.body.complement,
        client.phoneNumber = req.body.phoneNumber,
        client.mobileNumber = req.body.mobileNumber,
        client.active = req.body.active
        const a1 = await client.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const client = await Client.deleteOne({_id: req.params.id})
        res.json(client)
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router