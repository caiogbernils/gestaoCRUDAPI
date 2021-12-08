const express = require('express')
const router = express.Router()
const Ticket = require('../models/ticket')

router.post('/', async(req,res) => {
    const ticket = new Ticket({
        productId: req.body.productId,
        clientId: req.body.clientId,
        sellDate: req.body.sellDate,
        sellValue: req.body.sellValue,
        description: req.body.description
    })

    try{
        const a1 =  await ticket.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.get('/', async(req,res) => {
    try{
        const ticket = await Ticket.find()
        res.json(ticket)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
        const ticket = await Ticket.findById(req.params.id)
        res.json(ticket)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const ticket = await Ticket.findById(req.params.id)
        ticket.productId = req.body.productId,
        ticket.clientId = req.body.clientId,
        ticket.sellDate = req.body.sellDate,
        ticket.sellValue = req.body.sellValue,
        ticket.description = req.body.description
        const a1 = await ticket.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const ticket = await Ticket.deleteOne({_id: req.params.id})
        res.json(ticket)
    }catch(err){
        res.send('Error ' + err)
    }
})
module.exports = router