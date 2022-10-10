const {Router} = require('express')
const router = Router()
const Product = require('../model/product')
const Category = require('../model/category')

router.get('/',async(req,res)=>{
    let products = await Product.find().sort({_id:-1}).lean()
    let categories = await Category.find().lean()
    products = products.map((item,index) => {
        item.index = index+1
        item.status = item.status === 1 ? '<span class="badge light badge-success">Faol</span>' : '<span class="badge light badge-danger">Nofaol</span>'
        item.createdAt = item.createdAt.toLocaleString()
        return item
    })
    res.render('product',{
        title:`Kitoblar ro'yhati`,
        products,
        categories 
    })
})

router.post('/',async(req,res)=>{
    let {title,description,text,price,sale,category,reviews,atributs,cheap,popular,recom,soon,author,year,delivery,status} = req.body
    status = status || 0
    popular = popular || 0
    recom = recom || 0
    soon = soon || 0
    console.log(req.files);
    // if(req.files){
    //     let file = req.files.img
    //     const uniquePreffix = Date.now() + '-' + Math.round(Math.random * 1E9)
    //     let filepath = `uploads/${uniquePreffix}_${file.name}`
    //     file.mv(filepath, async err => {
    //         if(err) res.send(JSON.stringify(err))
    //         let product = await new Product({title,description,text,status,img:filepath})
    //         await product.save()
    //         res.send(JSON.stringify('ok'))
    //     })
    // }else {
    //     res.send(JSON.stringify('error'))
    // }
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

router.put('/save',async(req,res)=>{
    let {_id,title,description,text,status} = req.body
    status = status || 0
    order = order || 0
    if(req.files){
        let file = req.files.img
        const uniquePreffix = Date.now() + '-' + Math.round(Math.random * 1E9)
        let filepath = `uploads/${uniquePreffix}_${file.name}`
        file.mv(filepath, async err => {
            if(err) res.send(JSON.stringify(err))
            let product = await new Product({title,description,text,status,img:filepath})
            await product.save()
            res.send(JSON.stringify('ok'))
        })
    }else { 
        await Product.findByIdAndUpdate(_id,{title,description,text,status})
        res.send(JSON.stringify('ok'))
    }
})

router.get('/delete/:id',async(req,res)=>{
    let _id = req.params.id 
    await Product.findByIdAndRemove({_id})
    res.redirect('/product')
})

module.exports = router