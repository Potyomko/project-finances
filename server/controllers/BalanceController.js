const User = require('../models/User')

const getBalance = async (req, res) => {
    const { email } = req.body

    const user = await User.findOne({ email })
    if(!user){
        return res.status(400).json({message: "Не існує такого користувача"})
    }

    try {

        const balance = user.balance;
        res.status(200).json({balance})

    } catch (error) {
        return res.status(500).json({message: "Не вдалось отримати баланс"})
    }
}

const changeBalance = async (req, res) => {
    const { email, balance } = req.body

    const user = await User.findOne({ email })
    if(!user){
        return res.status(400).json({message: "Не існує такого користувача"})
    }

    try {

        user.balance = balance;
        await user.save()
        const { password, ...rest } = user._doc;
        res.status(200).json({balance, user: rest})

    } catch (error) {
        return res.status(500).json({message: "Не вдалось змінити баланс"})
    }
}

module.exports = {
    getBalance,
    changeBalance
}