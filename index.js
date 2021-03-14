const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  res.send('its work')
})

const api = require('./routes/routes')
app.use('/api', api)
app.listen(3000, ()=>console.log('server is running'))