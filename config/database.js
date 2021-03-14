const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'inready',
})

db.connect(err=>{
  if(err) throw err
  console.log('DB is connected !!!')
})

module.exports = db