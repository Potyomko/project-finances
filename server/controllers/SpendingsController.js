const User = require('../models/User')

const addSpending = async (req, res) => {
    const { amount, category, description, date, email } = req.body

    const user = await User.findOne({ email })
    if(!user){
        return res.status(400).json({message: "Не існує такого користувача"})
    }

    try {

        user.spendings.push({
            amount,
            category,
            description,
            date,
        })
        user.balance -= amount
        await user.save()
        
        const { password, ...rest } = user._doc;
        res.status(200).json({user: rest})

    } catch (error) {
        return res.status(500).json({message: "Не вдалось додати витрату"})
    }
}

const deleteSpending = async (req, res) => {
    const spendingId = req.params.id
    const { email } = req.body

    const user = await User.findOne({ email })
    if(!user){
        return res.status(400).json({message: "Не існує такого користувача"})
    }

    try {

        const spendingIndex = user.spendings.findIndex(spending => spending._id == spendingId)
        if (spendingIndex === -1) {
            return res.status(404).json({message: "Витрата не знайдена"})
        }

        const spendingToDelete = user.spendings[spendingIndex]
        user.spendings.splice(spendingIndex, 1)
        user.balance += spendingToDelete.amount
        await user.save()

        const { password, ...rest } = user._doc;
        res.status(200).json(rest)

    } catch (error) {
        return res.status(500).json({message: "Не вдалось видалити витрату"})
    }
}

module.exports = {
    addSpending,
    deleteSpending
}