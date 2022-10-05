const {Router} = require('express')
const router = Router()
const auth = require('../middleware/auth')

router.get('/',async(req,res)=> {
    res.render('user/index')
})

router.get('/login',async(req,res)=> {
    res.render('user/login',{
        title: 'Tizimga kirish',
        layout: 'nohead'
    })
})

router.post('/login', async(req,res)=>{
    let {login,password} = req.body
    if(login == 'admin' && password == 'qwerty'){
        req.session.isAuthed = true
        res.redirect('/')
    }
    else {
        res.redirect('/user/login')
    }
})

router.get('/logout',async(req,res)=>{
    req.session.destroy( err =>{
        if(err) console.log(err)
        res.redirect('/user/login')
    })
})

module.exports = router