// will contain all of my user related routes
const express = require('express')
const mysql = require('mysql')
const rdv = express.Router()


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'pim'
})

function getConnection() {
    return pool
}


// create rdv
rdv.post('/rdv_create', (req, res) => {
  console.log("Trying to create a new rdv...")
  console.log("How do we get the form data???")

  console.log("name: " + req.body.create_date)
  
  const date = req.body.create_date
  const adresse = req.body.create_adresse
  const description = req.body.create_description


  const queryString = "INSERT INTO rdv (date, adresse, description) VALUES (?, ?,?)"
  getConnection().query(queryString, [date, adresse, description], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new rdv: " + err)
      res.sendStatus(500)
      return
    }

    console.log("Inserted a new rdv with id: ", results.insertId);
    res.end()
  })
})

//GET all rdvs
rdv.get('/rdvs', (req, res) => {
const connection = getConnection()
const queryString = "SELECT * FROM rdv"
connection.query(queryString, (err, rows, fields) => {
    console.log("fetched SUCCESS")
    res.json(rows)
})

})

// update rdv
rdv.post('/rdv_update', (req, res) => {
console.log("Trying to create a new rdv...")
console.log("How do we get the form data???")

console.log("name: " + req.body.create_name)

const date = req.body.create_date
const adresse = req.body.create_adresse
const description = req.body.create_description

const id = req.body.create_id

const queryString = "UPDATE rdv SET date = ?, adresse = ?, description = ? Where rdv.id = ?  "
getConnection().query(queryString, [date, adresse, description, id], (err, results, fields) => {
  if (err) {
    console.log("Failed to insert new rdv: " + err)
    res.sendStatus(500)
    return
  }

  console.log("Inserted a new rdv with id: ", results.insertId);
  res.end()
})
})

//delete rdv
rdv.delete('/delete/:id',(req,res) => {
const sql = "DELETE FROM rdv WHERE id = ?";
const id = req.params.id;
pool.query(sql, id, (err, results, fields) => {
  if (err) {
    console.log("Failed to delete rdv: " + err)
    res.sendStatus(500)
    return
  }

  console.log("deleted rdv with id: ", results.insertId);
  res.end()
})
})

  
  module.exports = rdv