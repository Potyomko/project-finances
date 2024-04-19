const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const { register, login, logout } = require('./controllers/AuthController')
const { addIncome, deleteIncome, getIncomes } = require('./controllers/IncomesController')
const { addSpending, deleteSpending, getSpendings } = require('./controllers/SpendingsController')

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

mongoose.connect('mongodb+srv://admin:admin123@financesdb.iegbocb.mongodb.net/?retryWrites=true&w=majority&appName=FinancesDB')

app.post('/register', register)
app.post('/login', login)
app.get('/logout', logout)

app.post('/getIncomes', getIncomes)
app.post('/addIncome', addIncome)
app.post('/deleteIncome/:id', deleteIncome)

app.post('/getSpendings', getSpendings)
app.post('/addSpending', addSpending)
app.post('/deleteSpending/:id', deleteSpending)

app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});