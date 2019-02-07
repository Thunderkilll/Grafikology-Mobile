// will contain all of my user related routes
const express = require('express')
const mysql = require('mysql')
const router = express.Router()


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'pim'
})

function getConnection() {
    return pool
}





// create user
router.post('/user_create', (req, res) => {
    console.log("Trying to create a new user...")
    console.log("How do we get the form data???")
  
    console.log("name: " + req.body.create_nom)
    
    const nom = req.body.create_nom
    const mail = req.body.create_mail
    const password = req.body.create_password
    const prenom = req.body.create_prenom
    const type = req.body.create_type

    const queryString = "INSERT INTO user (nom, mail, password, prenom, type) VALUES (?, ?, ?, ?, ?)"
    getConnection().query(queryString, [nom, mail, password, prenom, type], (err, results, fields) => {
      if (err) {
        console.log("Failed to insert new user: " + err)
        res.sendStatus(500)
        return
      }
  
      console.log("Inserted a new user with id: ", results.insertId);
      res.end()
    })
  })
  
  //GET all users
router.get('/userss', (req, res) => {
  const connection = getConnection()
  const queryString = "SELECT * FROM user"
  connection.query(queryString, (err, rows, fields) => {
      console.log("fetched SUCCESS")
      res.json(rows)
  })

})

// update user
router.post('/user_update', (req, res) => {
  console.log("Trying to create a new user...")
  console.log("How do we get the form data???")

  console.log("name: " + req.body.create_name)
  
  const nom = req.body.create_nom
  const mail = req.body.create_mail
  const password = req.body.create_password
  const prenom = req.body.create_prenom
  const type = req.body.create_type
  const id = req.body.create_id

  const queryString = "UPDATE user SET nom = ?, mail = ?, password = ?, prenom = ?,  type = ? Where user.id = ?  "
  getConnection().query(queryString, [nom, mail, password, prenom, type, id], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new user: " + err)
      res.sendStatus(500)
      return
    }

    console.log("Inserted a new user with id: ", results.insertId);
    res.end()
  })
})

//delete user
router.delete('/delete/:id',(req,res) => {
  const sql = "DELETE FROM user WHERE id = ?";
  const id = req.params.id;
  pool.query(sql, id, (err, results, fields) => {
    if (err) {
      console.log("Failed to delete user: " + err)
      res.sendStatus(500)
      return
    }
  
    console.log("deleted user with id: ", results.insertId);
    res.end()
  })
  })
/*
  //get user by email
router.get('/userss/:email', (req, res) => {
  const email = req.params.email
  const connection = getConnection()
  const queryString = "SELECT * FROM user where email = ?"
  connection.query(queryString, [email], (err, rows, fields) => {
    //  console.log("fetched SUCCESS")
     // res.json(rows)

     if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
      // throw err
      }

      console.log("I think we fetched users successfully")

      const users = rows.map((row) => {
      return {name: row.name, Password: row.Password, email: row.email, imageUser: row.imageUser}
      })

      res.json(rows)
  })

})






/*

// get user's carte
router.get('/carte/user/:id_user', (req, res) => {
  const id_user = req.params.id_user
  const connection = getConnection()
  const queryString = "SELECT * FROM carte where id_user = ?"
  connection.query(queryString, [id_user], (err, rows, fields) => {
    //  console.log("fetched SUCCESS")
     // res.json(rows)

     if (err) {
      console.log("Failed to query for cartes: " + err)
      res.sendStatus(500)
      return
      // throw err
      }

      console.log("I think we fetched cartes successfully")

      const cartes = rows.map((row) => {
      return {id_carte: row.id_carte, id_user: row.id_user}
      })

      res.json(cartes)
  })

})
*/

module.exports = router


