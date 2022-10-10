const {Router} = require('express')
const router = Router()
const Atribut = require('../model/atribut')

router.get('/',async(req,res)=>{
    let atributs = await Atribut.find().lean()
    atributs = atributs.map((atribut,index) => {
        atribut.index = index+1
        atribut.status = atribut.status === 1 ? '<span class="badge light badge-success">Faol</span>' : '<span class="badge light badge-danger">Nofaol</span>'
        return atribut
    })
    res.render('atribut',{
        title:`Atributlar ro'yhati`,
        atributs                      
    })
})

router.post('/',async(req,res)=>{
    try {
        let {title,order,status} = req.body
        status = status || 0
        order = order || 0
        let newAtribut = await new Atribut({title,order,status})
        await newAtribut.save()
        // console.log({title,order,status});
        res.send(JSON.stringify('ok'))
    } catch (error) {
        res.send(JSON.stringify(error))
    } 
})
 
router.get('/:id',async(req,res)=>{
    if(req.params.id){  
        let _id = req.params.id 
        let atribut = await Atribut.findOne({_id})
        res.send(atribut)
    } else {
        res.send(JSON.stringify('error'))
    }
})

router.put('/save',async(req,res)=>{
    let {_id,title,order,status} = req.body
    status = status || 0
    order = order || 0
    await Atribut.findByIdAndUpdate(_id,{title,order,status})
    res.send(JSON.stringify('ok'))
})

router.get('/delete/:id',async(req,res)=>{
    let _id = req.params.id
    await Atribut.findByIdAndRemove({_id})
    res.redirect('/atribut')
})

module.exports = router