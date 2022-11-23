const {Router} = require('express')
const router = Router()
const Promo = require('../model/promo')
const Product = require('../model/product')
const auth = require('../middleware/auth')

router.get('/',auth,async(req,res)=>{
    let promo = await Promo.find().lean()
    
    promo = promo.map((item,index) => {
        item.index = index+1
        item.deadline = item.deadline.toLocaleString()
        item.status = item.status === 1 ? '<span class="badge light badge-success">Faol</span>' : '<span class="badge light badge-danger">Nofaol</span>'
        return item
    })
    res.render('promo',{
        title:`Aksiyalar ro'yhati`,
        promo                      
    })
})

router.get('/last',async(req,res)=>{
    let promo = await Promo.findOne({status:1})
    .populate('products')
    .populate({
        path : 'products',
        populate : {
          path : 'category'
        }
    })
    .sort({_id:-1})
    .limit(1)
    res.send(promo)
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

// ma'lumot qo'shish
router.post('/',async(req,res)=>{ 
    try {
        console.log(req.body);
        let {title,deadline,description,status} = req.body
        status = status || 0
        let newPromo = await new Promo({title,deadline,description,status})
        await newPromo.save()
        res.send(JSON.stringify('ok'))
    } catch (error) {
        res.send(JSON.stringify(error))
    } 
})

router.get('/show/:id',auth,async(req,res)=> {
    let _id = req.params.id
    let promo = await Promo.findOne({_id})
    .populate('products')
    .lean()

    let ids = []

    if(promo.products.length>0){
        promo.products = promo.products.map((product,index) =>{
            ids.push(product._id)
            product.index = index+1
            product.img = product.img[0]
            return product
        })
    }

    let products = await Product.find({_id: {$nin: ids}}).lean()
    res.render('promo/show',{
        title: `${promo.title} promo batafsili`,    
        promo,
        products
    })
})

router.get('/delbook/:id/:index',auth,async(req,res)=>{
    let _id = req.params.id
    let index = req.params.index
    let promo = await Promo.findOne({_id})
    promo.products.splice(index,1)
    await promo.save()
    res.redirect(`/promo/show/${_id}`)
})

router.post('/addbook',auth,async(req,res)=>{
    let {_id,product} = req.body
    let promo = await Promo.findOne({_id})
    promo.products.push(product) 
    await promo.save()
    res.redirect(`/promo/show/${_id}`)
})
 
// MA'LUMOTNI O'CHIRISH
router.get('/delete/:id',auth,async(req,res)=>{
    let _id = req.params.id
    await Promo.findByIdAndRemove({_id})
    res.redirect('/promo')
})

router.put('/save',async(req,res)=>{
    let {_id,title,description,deadline,status} = req.body
    status = status || 0
    await Promo.findByIdAndUpdate(_id,{title,description,deadline,status})
    res.send(JSON.stringify('ok'))
})

module.exports = router