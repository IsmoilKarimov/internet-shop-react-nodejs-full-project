const {Router} = require('express')
const router = Router()
const Advan = require('../model/advan')

router.get('/',async(req,res)=>{
    let advans = await Advan.find().lean()
    advans = advans.map((advan,index) => {
        advan.index = index+1
        advan.status = advan.status === 1 ? '<span class="badge light badge-success">Faol</span>' : '<span class="badge light badge-danger">Nofaol</span>'
        return advan
    })
    res.render('advan',{
        title:`Afzalliklar ro'yhati`,
        advans                      
    })
})

router.post('/',async(req,res)=>{
    let {title,order,text,status} = req.body
    status = status || 0
    if(req.files){
        let file = req.files.icon
        const uniquePreffix = Date.now() + '-' + Math.round(Math.random * 1E9)
        let filepath = `uploads/${uniquePreffix}_${file.name}`
        file.mv(filepath, async err => {
            if(err) res.send(JSON.stringify(err))
            let advan = await new Advan({title,order,text,status,icon:filepath})
            await advan.save()
            res.send(JSON.stringify('ok'))
        })
    }else {
        res.send(JSON.stringify('error'))
    }
})

 
router.get('/:id',async(req,res)=>{
    if(req.params.id){  
        let _id = req.params.id 
        let advan = await Advan.findOne({_id})
        res.send(advan)
    } else {
        res.send(JSON.stringify('error'))
    }
})

router.put('/save',async(req,res)=>{
    let {_id,title,text,icon,order,status} = req.body
    status = status || 0
    order = order || 0
    await Advan.findByIdAndUpdate(_id,{title,order,status,text,icon})
    res.send(JSON.stringify('ok'))
})

router.get('/delete/:id',async(req,res)=>{
    let _id = req.params.id 
    await Advan.findByIdAndRemove({_id})
    res.redirect('/advan')
})

module.exports = router