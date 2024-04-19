const User = require('../models/User')

const getIncomes = async (req, res) => {
    const { email } = req.body

    const user = await User.findOne({ email })
    if(!user){
        return res.status(400).json({message: "Не існує такого користувача"})
    }

    try {

        const incomes = user.incomes;
        res.status(200).json({incomes})

    } catch (error) {
        return res.status(500).json({message: "Не вдалось отримати доходи"})
    }
}

const addIncome = async (req, res) => {
    const { amount, category, description, date, email } = req.body

    const user = await User.findOne({ email })
    if(!user){
        return res.status(400).json({message: "Не існує такого користувача"})
    }

    try {

        user.incomes.push({
            amount,
            category,
            description,
            date,
        })
        user.balance += amount
        await user.save()
        
        const incomes = user.incomes
        const { password, ...rest } = user._doc
        res.status(200).json({incomes, user: rest})

    } catch (error) {
        return res.status(500).json({message: "Не вдалось додати дохід"})
    }
}

const deleteIncome = async (req, res) => {
    const incomeId = req.params.id
    const { email } = req.body

    const user = await User.findOne({ email })
    if(!user){
        return res.status(400).json({message: "Не існує такого користувача"})
    }

    try {

        const incomeIndex = user.incomes.findIndex(income => income._id == incomeId)
        if (incomeIndex === -1) {
            return res.status(404).json({message: "Дохід не знайдений"})
        }

        const incomeToDelete = user.incomes[incomeIndex]
        user.incomes.splice(incomeIndex, 1)
        user.balance -= incomeToDelete.amount
        await user.save()

        const incomes = user.incomes
        const { password, ...rest } = user._doc
        res.status(200).json({incomes, user: rest})

    } catch (error) {
        return res.status(500).json({message: "Не вдалось видалити дохід"})
    }
}

module.exports = {
    getIncomes,
    addIncome,
    deleteIncome
}