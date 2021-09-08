const express = require('express')
const servidor = express()
const morgan = require('morgan')
const path = require('path')
servidor.use(morgan('dev'))
servidor.use(express.static(path.join(__dirname +'/dist')));
servidor.use(express.urlencoded({extended:false}))
servidor.use(express.json())
//puerto de configuración
servidor.set('puerto',process.env.PORT || 80 || 8080)
//escuchando
servidor.listen(servidor.get('puerto'),()=>{
    console.log('servidor ok')
})

servidor
.get('/', (req, res) => {
    res.status(200).sendFile('./dist/index.html')
})

.get('/login',(req,res)=>{
    console.log(req.body)
})