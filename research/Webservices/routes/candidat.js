// will contain all of my user related routes
const express = require('express')
const mysql = require('mysql')
const candidat = express.Router()


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'pim'
})

function getConnection() {
    return pool
}


// create candidat
candidat.post('/candidat_create', (req, res) => {
  console.log("Trying to create a new candidat...")
  console.log("How do we get the form data???")

  console.log("name: " + req.body.create_nom)
  
  const nom = req.body.create_nom
  const mail = req.body.create_mail
  const password = req.body.create_password
  const prenom = req.body.create_prenom
  const testPsy = req.body.create_testPsy
  const testTech = req.body.create_testTech

  const queryString = "INSERT INTO candidat (nom, mail, password, prenom, testPsy, testTech) VALUES (?, ?,?, ?, ?, ?)"
  getConnection().query(queryString, [nom, mail, password, prenom, testPsy , testTech], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new candidat: " + err)
      res.sendStatus(500)
      return
    }

    console.log("Inserted a new candidat with id: ", results.insertId);
    res.end()
  })
})

//GET all candidats
candidat.get('/candidats', (req, res) => {
const connection = getConnection()
const queryString = "SELECT * FROM candidat"
connection.query(queryString, (err, rows, fields) => {
    console.log("fetched SUCCESS")
    res.json(rows)
})

})

// update candidat
candidat.post('/candidat_update', (req, res) => {
console.log("Trying to create a new candidat...")
console.log("How do we get the form data???")

console.log("name: " + req.body.create_name)

const nom = req.body.create_nom
const mail = req.body.create_mail
const password = req.body.create_password
const prenom = req.body.create_prenom
const testPsy = req.body.create_testPsy
const testTech = req.body.create_testTech
const id = req.body.create_id

const queryString = "UPDATE candidat SET nom = ?, mail = ?, password = ?, prenom = ?,  testPsy = ? , testTech = ? Where candidat.id = ?  "
getConnection().query(queryString, [nom, mail, password, prenom, testPsy,testTech, id], (err, results, fields) => {
  if (err) {
    console.log("Failed to insert new candidat: " + err)
    res.sendStatus(500)
    return
  }

  console.log("Inserted a new candidat with id: ", results.insertId);
  res.end()
})
})

//delete candidat
candidat.delete('/delete/:id',(req,res) => {
const sql = "DELETE FROM candidat WHERE id = ?";
const id = req.params.id;
pool.query(sql, id, (err, results, fields) => {
  if (err) {
    console.log("Failed to delete candidat: " + err)
    res.sendStatus(500)
    return
  }

  console.log("deleted candidat with id: ", results.insertId);
  res.end()
})
})

  
  module.exports = candidat