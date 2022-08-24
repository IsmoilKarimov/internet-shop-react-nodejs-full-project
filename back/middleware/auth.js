module.exports = (req,res,next) =>{
    if (!req.session.isAuthed){
        res.redirect('/user/login')
    }
    next()
}