const db = require('../../config/database')

const Admin = function(admin){
  this.username = admin.username
  this.password = admin.password
  this.nama = admin.nama
}
const table = 'admin'

Admin.create = (newData, result)=>{
  db.query('INSERT INTO table SET ?', newData, (err, res)=>{

  })
}

module.exports = Admin