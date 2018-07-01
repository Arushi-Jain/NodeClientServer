
/** ********************** Import node modules ************************ */
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
/** ********************** Import local modules ************************ */
import apiRoutes from './app/routes/index'

const app = express()
const port = 3000
/** Routing */
app.use(cors())
app.use(bodyParser)
app.use(express)
app.use('/api', apiRoutes)

/** Server Connection to defined port */
const server = app.listen(port, (error) => {
    if (error) {
        console.log('Server Connection failed!', error)
    } else {
        console.log('Listening on port', port, '!')
    }
})

app.get('*', (req, res) => {
    res.send(`the api does not exists`);
})