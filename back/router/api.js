const {Router} = require('express')
const router = Router()

const Category = require('../model/category')
const Advan = require('../model/advan')

router.get('/category/all',async(req,res)=>{
    let category = await Category.find({status:1})
    res.send(category)
})

router.get('/advan/all', async(req,res)=>{
    let advan = await Advan.find({status:1}).sort({order:1})
    if(advan){
        res.send(advan)
    }else{
        res.send('error')
    }
})
  
module.exports = router