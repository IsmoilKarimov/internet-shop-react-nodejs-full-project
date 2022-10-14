const {Router} = require('express')
const router = Router()
const Product = require('../model/product')
const Category = require('../model/category')
const Atribut = require('../model/atribut')

router.get('/',async(req,res)=>{
    let products = await Product.find().populate('category').sort({_id:-1}).lean()
    let categories = await Category.find().lean()
    let atributs = await Atribut.find().lean()
    products = products.map((item,index) => {
        item.index = index+1
        item.status = item.status === 1 ? '<span class="badge light badge-success">Faol</span>' : '<span class="badge light badge-danger">Nofaol</span>'
        item.createdAt = item.createdAt.toLocaleString()
        return item
    })
    res.render('product',{
        title:`Kitoblar ro'yhati`,
        products,
        categories,
        atributs
    })
})

router.post('/',async(req,res)=>{
    let {title,description,text,price,sale,category,reviews,atributs,cheap,popular,recom,soon,author,year,delivery,status} = req.body
    status = status || 0
    popular = popular || 0
    recom = recom || 0
    soon = soon || 0
    atributs = JSON.parse(atributs)
    if(req.files){
        let files = req.files.img
        let img = []
        await Promise.all(files.map(async(file) => {
            const uniquePreffix = Date.now() + '-' + Math.round(Math.random * 1E9)
            let filepath = `uploads/${uniquePreffix}_${file.name}`
            await file.mv(filepath)
            img.push(filepath)
        }))
        let product = await new Product({title,description,text,price,sale,category,reviews,atributs,cheap,popular,recom,soon,author,year,delivery,status,img})
        await product.save()
        res.send(JSON.stringify('ok'))
    }else {
        res.send(JSON.stringify('error'))
    }
})

router.get('/:id',async(req,res)=>{
    if(req.params.id){  
        let _id = req.params.id
        let product = await Product.findOne({_id})
        res.send(product)
    } else {
        res.send(JSON.stringify('error'))
    }
})

router.post('/save',async(req,res)=>{
    try {
        let {_id,title,description,text,price,sale,category,reviews,atributs,cheap,popular,recom,soon,author,year,delivery,status} = req.body
        status = status || 0
        popular = popular || 0
        recom = recom || 0
        soon = soon || 0
        atributs = JSON.parse(atributs)
        if(req.files){
            let files = req.files.img
            let img = []
            await Promise.all(files.map(async(file) => {
                const uniquePreffix = Date.now() + '-' + Math.round(Math.random * 1E9)
                let filepath = `uploads/${uniquePreffix}_${file.name}`
                await file.mv(filepath)
                img.push(filepath)
            }))
            await Product.findByIdAndUpdate(_id,{title,description,text,price,sale,category,reviews,atributs,cheap,popular,recom,soon,author,year,delivery,status,img})
            res.send(JSON.stringify('ok'))
        }else {
            await Product.findByIdAndUpdate(_id,{title,description,text,price,sale,category,reviews,atributs,cheap,popular,recom,soon,author,year,delivery,status})
            res.send(JSON.stringify('ok'))
        }
    } catch (error) {
        res.send(JSON.stringify(error))             
    }
})

router.get('/delete/:id',async(req,res)=>{
    let _id = req.params.id 
    await Product.findByIdAndRemove({_id})
    res.redirect('/product')
})


module.exports = router