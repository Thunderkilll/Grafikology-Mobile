// load our app server using express somehow....
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

app.use(morgan('short'))

const router = require('./routes/user.js')
var products = require('./routes/products.js')
var electricite = require('./routes/electricite.js')
var candidat = require('./routes/candidat.js')
var chantiers = require('./routes/chantiers.js')
var entreprise =require('./routes/entreprise.js')
var rdv = require('./routes/rdv.js')

app.use("/user",router)
app.use("/candidat",candidat)
app.use("/entreprise",entreprise)
app.use("/rdv",rdv)
//app.use("/produit",products)
//app.use("/electricite",electricite)
//app.use("/carte",carte)
//app.use("/chantiers", chantiers)

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOT")
})

app.post("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOT")
})
// localhost:3003
app.listen(3003, () => {
  console.log("Server is up and listening on 3003...")
})
