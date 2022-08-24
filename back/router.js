const {Router} = require('express')
const router = Router()
const auth = require('./middleware/auth')

router.get('/',auth,async(req,res)=>{
    res.render('index')
})

module.exports = router
