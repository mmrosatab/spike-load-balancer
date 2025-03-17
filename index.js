import express from 'express'

const PORT = 7001
const app = express()

app.get('/test', (req, res) => {
    console.log('/test')
    return res.json({ message: 'ok' }).status(200)
})

app.listen(PORT, () => {
    console.log(`listening in ${PORT} port!`)
})


