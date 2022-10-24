const {Router} = require('express')
const router = Router()
const Promo = require('../model/promo')
const Product = require('../model/product')

router.get('/',async(req,res)=>{
    let promo = await Promo.find().lean()
    promo = promo.map((item,index) => {
        item.index = index+1
        item.status = item.status === 1 ? '<span class="badge light badge-success">Faol</span>' : '<span class="badge light badge-danger">Nofaol</span>'
        return item
    })
    res.render('promo',{
        title:`Aksiyalar ro'yhati`,
        promo                      
    })
})

// ma'lumot qo'shish
router.post('/',async(req,res)=>{ 
    try {
        let {title,deadline,description,status} = req.body
        status = status || 0
        let newPromo = await new Promo({title,deadline,description,status})
        await newPromo.save()
        // console.log({title,order,status});
        res.send(JSON.stringify('ok'))
    } catch (error) {
        res.send(JSON.stringify(error))
    } 
})
 
router.get('/:id',async(req,res)=>{
    if(req.params.id){  
        let _id = req.params.id 
        let promo = await Promo.findOne({_id})
        res.send(promo)
    } else {
        res.send(JSON.stringify('error'))
    }
})

router.put('/save',async(req,res)=>{
    let {_id,title,order,status} = req.body
    status = status || 0
    order = order || 0
    await Promo.findByIdAndUpdate(_id,{title,order,status})
    res.send(JSON.stringify('ok'))
})

router.get('/delete/:id',async(req,res)=>{
    let _id = req.params.id
    await Promo.findByIdAndRemove({_id})
    res.redirect('/promo')
})

module.exports = router