import express from 'express'
import {gererateUploadURL} from './s3.js'

const app = express()

app.use(express.static('front'))

app.get('/s3url',(req,res)=>{
    const url = await gererateUploadURL()
    res.send({url})

})



app.listen(8080,()=> console.log("listening on port 8080"))