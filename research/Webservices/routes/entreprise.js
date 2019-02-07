// will contain all of my user related routes
const express = require('express')
const mysql = require('mysql')
const entreprise = express.Router()


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'pim'
})

function getConnection() {
    return pool
}


// create entreprise
entreprise.post('/entreprise_create', (req, res) => {
  console.log("Trying to create a new entreprise...")
  console.log("How do we get the form data???")

  console.log("name: " + req.body.create_nom)
  
  const nom = req.body.create_nom
  const suffix = req.body.create_suffix


  const queryString = "INSERT INTO entreprise (nom, suffix) VALUES (?, ?)"
  getConnection().query(queryString, [nom, suffix], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new entreprise: " + err)
      res.sendStatus(500)
      return
    }

    console.log("Inserted a new entreprise with id: ", results.insertId);
    res.end()
  })
})

//GET all entreprises
entreprise.get('/entreprises', (req, res) => {
const connection = getConnection()
const queryString = "SELECT * FROM entreprise"
connection.query(queryString, (err, rows, fields) => {
    console.log("fetched SUCCESS")
    res.json(rows)
})

})

// update entreprise
entreprise.post('/entreprise_update', (req, res) => {
console.log("Trying to create a new entreprise...")
console.log("How do we get the form data???")

console.log("name: " + req.body.create_name)

const nom = req.body.create_nom
const suffix = req.body.create_suffix

const id = req.body.create_id

const queryString = "UPDATE entreprise SET nom = ?, suffix = ? Where entreprise.id = ?  "
getConnection().query(queryString, [nom, suffix, id], (err, results, fields) => {
  if (err) {
    console.log("Failed to insert new entreprise: " + err)
    res.sendStatus(500)
    return
  }

  console.log("Inserted a new entreprise with id: ", results.insertId);
  res.end()
})
})

//delete entreprise
entreprise.delete('/delete/:id',(req,res) => {
const sql = "DELETE FROM entreprise WHERE id = ?";
const id = req.params.id;
pool.query(sql, id, (err, results, fields) => {
  if (err) {
    console.log("Failed to delete entreprise: " + err)
    res.sendStatus(500)
    return
  }

  console.log("deleted entreprise with id: ", results.insertId);
  res.end()
})
})

  
  module.exports = entreprise