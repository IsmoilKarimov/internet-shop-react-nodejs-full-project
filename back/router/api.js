const {Router} = require('express')
const router = Router()

const Category = require('../model/category')
const Advan = require('../model/advan')
const Review = require('../model/review')
const News = require('../model/news')
const Product = require('../model/product')

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

router.get('/review/all', async(req,res)=>{
    let review = await Review.find({status:1}).sort({_id:1})
    if(review){
        res.send(review)
    }else{
        res.send('error')
    }
})

router.get('/news/all',async(req,res)=>{
    let news = await News.find({status:1})
    .select(['description','img','title','_id'])
    .sort({_id:-1})
    .limit(4)
    if(news){
        res.send(news)
    }else {
        res.send('error')
    }
})

router.get('/products/get/:id',async(req,res)=> {
    if(req.params){
        let _id = req.params.id
        let product = await Product.findOne({_id}).populate('atributs.atribut').populate('category')
        
        let others = await Product.find({category:product.category})
        .where({_id:{$ne:product._id}})                      
        .select(['title','price','sale','category','reviews','img'])
        .populate('atributs.atribut')
        .populate('category')
        .limit(3)

        product.img = product.img[0]        
        others = others.map(item => {
            item.img = item.img[0]
            return item
        })     
        
        res.send({product,others})
    
    } else {
        res.send(JSON.stringify('error'))           
    }
})

router.get('/products/cheap',async(req,res)=> {
    let products = await Product.find({status:1,cheap:1})
    .select(['_id','title','img','price','sale','author'])
    .limit(5)
    .sort({_id:-1})
    
    products = products.map(product => {
        product.img = product.img[0]
        return product
    })
    res.send(products)
})

router.get('/products/recom',async(req,res)=> {
    let products = await Product.find({status:1,recom:1})
    .select(['_id','title','img',])
    .limit(12)
    .sort({_id:-1})
    
    products = products.map(pro => {
        pro.img = pro.img[0]
        return pro
    })
    res.send(products)
})

router.get('/products/popular',async(req,res)=> {
    let products = await Product.find({status:1,popular:1})
    .select(['_id','title','img'])
    .limit(12)
    .sort({_id:-1})
    
    products = products.map(pro => {
        pro.img = pro.img[0]
        return pro
    })
    res.send(products)
})

router.get('/products/soon',async(req,res)=> {
    let products = await Product.find({status:1,soon:1})
    .select(['_id','title','img'])
    .limit(6)
    .sort({_id:-1})
    
    products = products.map(pro => {
        pro.img = pro.img[0]
        return pro
    })
    res.send(products)
})

router.get('/products/sale',async(req,res)=> {
    let products = await Product.find({status:1,sale: { $gte: 1}})
    .select(['_id','title','img','category','price','sale','reviews'])
    .limit(12)
    .sort({_id:-1})
    
    products = products.map(product => {
        product.img = product.img[0]
        return product
    })
    res.send(products)
})

router.post('/newreview',async(req,res)=>{
    console.log(req.files);
    console.log(req.body);
})

module.exports = router