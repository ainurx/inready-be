const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
  res.send('ini dari API')
})

module.exports = router