const {Router} = require('express')
const router = Router()
const auth = require('./middleware/auth')

const userRouter = require('./router/user')

router.get('/',auth,async(req,res)=>{
    res.render('index',{
        title: 'Boshqaruv sahifasi',
    })
})

router.use('/user',userRouter)

module.exports = router
