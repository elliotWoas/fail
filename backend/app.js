const express = require('express')
const app = express()
const cors = require('cors')
const port = 4001
const mongoose = require('mongoose')


const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose');
const Connect = require('connect-pg-simple')
const session = require('express-session')


//roters import
const auth_router = require('./routes/auth.router')
// const adminRouter = require('./routes/adminjs.router')

//middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//database connect 
mongoose.connect('mongodb+srv://arshiyah53:46646659@cluster0.p7fvwrc.mongodb.net/user?retryWrites=true&w=majority').then(()=>{
    console.log("connected to db")
})

const admin = new AdminJS({})

const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)



//auth router                 
app.use("/api/auth", auth_router);
// app.use("/", adminRouter)





app.get("/", (req, res) => {
    res.send("hello arshiya and mehdi");
  });




  app.listen(port, () => {
    console.log(`AdminJS started on http://localhost:${port}${admin.options.rootPath}`)
  })
  






module.exports = app;