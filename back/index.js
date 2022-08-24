const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileupload = require('express-fileupload')
const session = require('express-session') 
const MongoDBStore = require('connect-mongodb-session')(session) // !
const flash = require('connect-flash') // !

// router require
const routerList = require('./router')

// middleware require
const varMiddle = require('./middleware/var') 

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
})
app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')

app.use(express.static('public'))
app.use('/uploads',express.static('uploads'))
app.use(fileupload())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-CSRF-Token');
    // res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const MONGODB_URI = 'mongodb://127.0.0.1:27017/pirbook'
let store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'session'
})
app.use(session({
    secret: 'laksjdhlkasjdhsakj',
    saveUninitialized:false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 10,
        secure: false 
    },
    resave:true,
    store
}))

// app.use(csrf())
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(flash())
app.use(varMiddle)

app.use(routerList)

const PORT = 5005

async function dev(){
    try {
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true})
        app.listen(PORT,()=>{
            console.log(`Server is running ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
dev()
