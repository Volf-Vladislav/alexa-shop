const express = require('express')
const mongoose = require('mongoose')
const cons = require('consolidate')
const path = require('path')

const clientRouter = require('./router/ClientRouter')
const authRouter = require('./router/AuthRouter')
const userRouter = require('./router/UserRouter')
const managerRouter = require('./router/ManagerRouter')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'view/html'))
app.set('view engine', 'html')
app.use(express.static(__dirname + '/view'))

app.use('/', clientRouter)
app.use('/api/auth', authRouter)
app.use('/api', userRouter)
app.use('/api/manager', managerRouter)

async function start() {
    const DBUrl = 'mongodb://zalupka:zalupka@cluster0-shard-00-00.t3zhb.mongodb.net:27017,cluster0-shard-00-01.t3zhb.mongodb.net:27017,cluster0-shard-00-02.t3zhb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-rxzycs-shard-0&authSource=admin&retryWrites=true&w=majority'
    try {
        app.listen(PORT, () => {
            console.log('Server started on port ' + PORT)
        })

        await mongoose.connect(DBUrl)
    }
    catch (err) {
        console.log(err)
    }
}

start()