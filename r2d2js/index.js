const express = require('express')
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express()
const port =  process.env.PORT||3000

app.use(cors())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

const hooray = require('./hooray');

app.post('/R2D2', (req, res) => {
    let restpi = hooray(req.body)
    if(restpi){
        console.log('R2D2 fulfilled his mission')
        res.send('R2D2 fulfilled his mission')
    }else{
        console.log('R2D2 has failed in its mission')
        res.send('R2D2 has failed in its mission')
    }
})


app.listen(port, () => console.log(`iam r2d2, one app in nodeJs for requests http, listening on port ${port}!`))