const express = require('express')
const router = express.Router()
const Product = require('../models/product')

router.post('/', async(req,res) => {
    const product = new Product({
        name: req.body.name,
        code: req.body.code,
        purchaseDate: req.body.purchaseDate,
        purchaseValue: req.body.purchaseValue,
        sellValue: req.body.sellValue,
        position: req.body.position,
        description: req.body.description,
        active: req.body.active
    })
    
    try{
        const a1 =  await product.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.get('/', async(req,res) => {
    try{
           const product = await Product.find()
           res.json(product)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const product = await Product.findById(req.params.id)
           res.json(product)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const product = await Product.findById(req.params.id) 
        product.name = req.body.name,
        product.code = req.body.code,
        product.purchaseDate = req.body.purchaseDate,
        product.purchaseValue = req.body.purchaseValue,
        product.sellValue = req.body.sellValue,
        product.position = req.body.position,
        product.description = req.body.description,
        product.active = req.body.active
        const a1 = await product.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }
    
})
router.delete('/:id', async(req,res) => {
    try{
        const product = await Product.deleteOne({_id: req.params.id})
        res.json(product)
    }catch(err){
        res.send('Error ' + err)
    }
})


module.exports = router